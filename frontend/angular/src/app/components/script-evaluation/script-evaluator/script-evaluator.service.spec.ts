import { TestBed } from '@angular/core/testing';

import { ScriptEvaluatorService } from './script-evaluator.service';
import { LogLine } from './script-evaluator';

describe('ScriptEvaluatorService', () => {
  let service: ScriptEvaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptEvaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test valid javascript', () => {
    const validScript = `class JsClass {
      constructor() {
        this.canRun = true;
      }
      isRunnable() {
        return this.canRun;
      }
    }`;
    const testResult = service.testScript(validScript);
    expect(testResult.valid).toBeTrue();
    expect(testResult.error).not.toBeDefined();
    expect(testResult.line).not.toBeDefined();
  });

  it('should detect invalid javascript', () => {
    const validScript = `class JsClass {
      constructor() {
        this.canRun = "true; // line 3 should fail
      }
      isRunnable() {
        return this.canRun;
      }
    }`;
    const testResult = service.testScript(validScript);
    expect(testResult.valid).toBeFalse();
    expect(testResult.error).toBeDefined();
    expect(testResult.line).toMatch('Line 3:.*');
  });

  it('should run javascript and log, warn, error line', async () => {
    const validScript = `(() => {
      console.log(3*4);
      console.warn('warning');
      console.error({failed: true});
    })();`;
    const runner = service.createRunner();
    const lines: LogLine[] = [];
    runner.logLine.subscribe(line => lines.push(line));

    await runner.run(validScript);

    expect(lines[0].line).toEqual('12');
    expect(lines[0].logLevel).toEqual('log');

    expect(lines[1].line).toEqual('warning');
    expect(lines[1].logLevel).toEqual('warn');

    expect(lines[2].line).toEqual('{"failed":true}');
    expect(lines[2].logLevel).toEqual('error');
  });
});
