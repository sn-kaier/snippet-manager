import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ScriptEvaluator } from './script-evaluator';
import { parseScript } from 'esprima';

export interface ScriptTestResult {
  valid: boolean;
  error?: any;
  line?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScriptEvaluatorService {
  private readonly renderer: Renderer2;
  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public createRunner(): ScriptEvaluator {
    return new ScriptEvaluator(this.renderer);
  }

  public testScript(scriptSource: string): ScriptTestResult {
    try {
      parseScript(scriptSource, {
        loc: true
      });
      return {
        valid: true
      };
    } catch (e) {
      return {
        error: e,
        valid: false,
        line: `Line ${e.lineNumber}: ${e.description}`
      };
    }
  }
}
