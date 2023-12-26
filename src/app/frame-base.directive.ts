import { Directive, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Directive({
  selector: '[rtFrameBase]',
  standalone: true,
})
export class FrameBaseDirective {
  private readonly activatedRoute = inject(ActivatedRoute);
  protected readonly dataS = toSignal(this.activatedRoute.data);
  protected readonly fragmentS = toSignal(this.activatedRoute.fragment);
  protected readonly queryParamsS = toSignal(this.activatedRoute.queryParams);
  protected readonly paramsS = toSignal(this.activatedRoute.params);
  protected readonly urlS = toSignal(this.activatedRoute.url);
  protected readonly headerS = computed(
    () => this.paramsS()?.['name'] ?? 'Frame'
  );

  constructor() {
    // console.log('Outlet:', this.activatedRoute.outlet);
    // console.log('Component:', this.activatedRoute.component);
    // console.log('Path From Root:', this.activatedRoute.pathFromRoot);
    // console.log('Path From Root:', this.activatedRoute.url);
    // console.log('Route Config:', this.activatedRoute.routeConfig);
    // console.log('Snapshot:', this.activatedRoute.snapshot);
  }

  protected nonEmptyContent(obj: unknown) {
    if (obj && typeof obj === 'object') {
      return Object.keys(obj).length ? obj : null;
    } else {
      return obj;
    }
  }
}
