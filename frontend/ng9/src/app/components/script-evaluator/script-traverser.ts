import {
  BlockStatement,
  DoWhileStatement,
  Expression,
  ForStatement,
  MethodDefinition,
  ModuleDeclaration,
  Pattern,
  Position,
  Program,
  SpreadElement,
  Statement,
  SwitchCase,
  WhileStatement
} from 'estree';

export class ScriptTraverser {
  lineAddedCharacters: any = {};

  constructor(private lines: string[]) {}

  public traverseProgram(testedCode: Program) {
    testedCode.body.forEach(line => this.traverseStatement(line));
  }

  private addToLineAddedStringLength(line: number, length: number) {
    this.lineAddedCharacters[line] = this.getLineAddedLengh(line) + length;
  }

  private getLineAddedLengh(line: number): number {
    return this.lineAddedCharacters[line] || 0;
  }

  private traverseStatement(statement: Statement | ModuleDeclaration | Array<Statement>) {
    if (!statement) {
      return;
    }
    if (Array.isArray(statement)) {
      statement.forEach(s => this.traverseStatement(s));
      return;
    }
    switch (statement.type) {
      case 'ExpressionStatement':
        this.traverseExpression(statement.expression);
        break;
      case 'BlockStatement':
        this.traverseStatement(statement.body);
        break;
      case 'EmptyStatement':
        break;
      case 'DebuggerStatement':
        break;
      case 'WithStatement':
        this.traverseStatement(statement.body);
        break;
      case 'ReturnStatement':
        this.traverseExpression(statement.argument);
        break;
      case 'LabeledStatement':
        this.traverseStatement(statement.body);
        break;
      case 'BreakStatement':
        break;
      case 'ContinueStatement':
        break;
      case 'IfStatement':
        this.traverseExpression(statement.test);
        this.traverseStatement(statement.consequent);
        break;
      case 'SwitchStatement':
        this.traverseExpression(statement.discriminant);
        statement.cases.forEach(st => this.traverseSwitchCase(st));
        break;
      case 'ThrowStatement':
        this.traverseExpression(statement.argument);
        break;
      case 'TryStatement':
        this.traverseStatement(statement.block);
        this.traverseStatement(statement.handler && statement.handler.body);
        this.traverseStatement(statement.finalizer);
        break;
      case 'WhileStatement':
        this.traverseExpression(statement.test);
        this.traverseStatement(statement.body);
        this.addWaitNextTick(statement);
        break;
      case 'DoWhileStatement':
      case 'ForStatement':
        this.traverseExpression(statement.test);
        this.traverseStatement(statement.body);
        this.addWaitNextTick(statement);
        break;
      case 'ForInStatement':
      case 'ForOfStatement':
        this.traverseStatement(statement.body);
        this.traverseExpression(statement.right);
        break;
      case 'FunctionDeclaration':
        this.traversePatterns(statement.params);
        this.traverseStatement(statement.body);
        this.traversePatterns(statement.params);
        break;
      case 'VariableDeclaration':
        statement.declarations.forEach(dec => this.traverseExpression(dec.init));
        break;
      case 'ClassDeclaration':
        break;
      case 'ImportDeclaration':
        break;
      case 'ExportNamedDeclaration':
        break;
      case 'ExportDefaultDeclaration':
        break;
      case 'ExportAllDeclaration':
        break;
    }
  }

  private traverseExpression(expression: Expression | Array<Expression | SpreadElement>) {
    if (expression) {
      return;
    }
    if (Array.isArray(expression)) {
      expression.forEach(e => this.traverseExpression(e.type === 'SpreadElement' ? e.argument : e));
      return;
    }

    switch (expression.type) {
      case 'ThisExpression':
        break;
      case 'ObjectExpression':
        expression.properties.forEach(prop => {
          this.traverseExpression(prop.key);
          if (prop.computed) {
            this.traverseExpression(prop.value as Expression);
          } else {
            this.traversePatterns(prop.value as Pattern);
          }
        });
        break;
      case 'FunctionExpression':
        this.traversePatterns(expression.params);
        this.traverseStatement(expression.body);
        break;
      case 'ArrowFunctionExpression':
        this.traversePatterns(expression.params);
        if (expression.expression) {
          this.traverseExpression(expression.body as Expression);
        } else {
          this.traverseStatement(expression.body as BlockStatement);
        }
        break;
      case 'YieldExpression':
        this.traverseExpression(expression.argument);
        break;
      case 'Literal':
        break;
      case 'UnaryExpression':
      case 'UpdateExpression':
        this.traverseExpression(expression.argument);
        break;
      case 'BinaryExpression':
        this.traverseExpression(expression.left);
        this.traverseExpression(expression.right);
        break;
      case 'AssignmentExpression':
        this.traverseExpression(expression.right);
        break;
      case 'LogicalExpression':
        this.traverseExpression(expression.left);
        this.traverseExpression(expression.right);
        break;
      case 'MemberExpression':
        this.traverseExpression(expression.computed ? (expression.object as Expression) : null);
        this.traverseExpression(expression.property);
        break;
      case 'ConditionalExpression':
        this.traverseExpression(expression.alternate);
        this.traverseExpression(expression.consequent);
        break;
      case 'CallExpression':
        this.traverseExpression(expression.callee.type !== 'Super' ? (expression.callee as any) : null);
        this.traverseExpression(expression.arguments);
        break;
      case 'NewExpression':
        this.traverseExpression(expression.arguments);
        this.traverseExpression(expression.callee.type !== 'Super' ? (expression.callee as any) : null);
        break;
      case 'SequenceExpression':
        this.traverseExpression(expression.expressions);
        break;
      case 'TemplateLiteral':
        this.traverseExpression(expression.expressions);
        break;
      case 'TaggedTemplateExpression':
        this.traverseExpression(expression.tag);
        this.traverseExpression(expression.quasi);
        break;
      case 'ClassExpression':
        this.traverseMethodDefinitions(expression.body && expression.body.body);
        break;
      case 'MetaProperty':
        break;
      case 'Identifier':
        break;
      case 'AwaitExpression':
        this.traverseExpression(expression.argument);
        break;
      case 'ArrayExpression':
        this.traverseExpression(expression.elements);
        break;
    }
  }

  private traverseSwitchCase(statement: SwitchCase) {
    if (!statement) {
      return;
    }
    this.traverseExpression(statement.test);
    statement.consequent.forEach(cons => this.traverseStatement(cons));
  }

  private addWaitNextTick(statement: DoWhileStatement | WhileStatement | ForStatement) {
    console.log('add wait for next tick on', statement.loc.start.line, ':', statement.loc.start.column, statement);

    // add a counter before that;
    const counterName =
      '_' +
      Math.random()
        .toString(36)
        .substring(2) +
      Math.random()
        .toString(36)
        .substring(2);

    // wait every 10000th loop for next tick to not block the user interface.
    const counterScript = `\nlet ${counterName} = 4;\n`;
    const waitScript = `\n
    ${counterName}++;
    if(${counterName} > 10000) {
      ${counterName} = 0;
      await (new Promise(resolve => {setTimeout(()=>{resolve();}, 1);}));
    }
    `;
    this.insertScript(statement.loc.start, counterScript, 0);
    this.insertScript(statement.body.loc.start, waitScript, 1);
  }

  private insertScript(location: Position, scriptToInsert: string, charOffset: number) {
    const lineIndex = location.line - 1;
    const charIndex = location.column + charOffset + this.getLineAddedLengh(lineIndex);
    const originalLine = this.lines[lineIndex];
    this.addToLineAddedStringLength(lineIndex, scriptToInsert.length);
    this.lines[lineIndex] =
      originalLine.substring(0, charIndex) + scriptToInsert + originalLine.substring(charIndex, originalLine.length);
  }

  private traverseMethodDefinitions(methodDefinitions: Array<MethodDefinition>) {
    if (!methodDefinitions) {
      return;
    }
    methodDefinitions.forEach(m => {
      this.traverseExpression(m.key);
      this.traverseExpression(m.value);
    });
  }

  private traversePatterns(param: Pattern | Array<Pattern>) {
    if (!param) {
      return;
    }
    if (Array.isArray(param)) {
      param.forEach(p => {
        this.traversePatterns(p);
      });
      return;
    }
    switch (param.type) {
      case 'Identifier':
        break;
      case 'ObjectPattern':
        param.properties.forEach(prop => {
          this.traversePatterns(prop.value);
          this.traverseExpression(prop.key);
        });
        break;
      case 'ArrayPattern':
        this.traversePatterns(param.elements);
        break;
      case 'RestElement':
        break;
      case 'AssignmentPattern':
        this.traversePatterns(param.left);
        this.traverseExpression(param.right);
        break;
      case 'MemberExpression':
        this.traverseExpression(param.property);
        if (param.computed) {
          this.traverseExpression(param.object as any);
        }
        break;
    }
  }
}

// async function placeground() {
//   await new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, 0);
//   });
//
//   const complicatedExp = () => {
//     return (
//       a = (() => {
//         let n = 3;
//         let i = 2;
//         while (n > 0) {
//           n--;
//           i *= 2;
//         }
//         return i;
//       })()
//     ) => {
//       return a * 2;
//     };
//   };
//   console.log(complicatedExp()());
//
//   let counter = 1;
//   while (counter < 10) {
//     counter++;
//     console.log(counter, 'counter');
//   }
// }
