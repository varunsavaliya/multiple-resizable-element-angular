import { Component, ElementRef, ViewChild } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
interface DivStyle {
  position?: string;
  left?: string;
  top?: string;
  width?: string;
  height?: string;
}
@Component({
  selector: 'app-multiple-elements',
  templateUrl: './multiple-elements.component.html',
  styleUrls: ['./multiple-elements.component.css'],
})
export class MultipleElementsComponent {
  public upperStyle: DivStyle = {};
  public middleStyle: DivStyle = {};
  public lowerStyle: DivStyle = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent, divName: string): void {
    console.log('Element was resized', event);
    if (divName === 'upper') {
      this.upperStyle = {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: `${event.rectangle.height}px`,
      };
    } else if (divName === 'middle') {
      this.middleStyle = {
        position: 'fixed',
        left: '0',
        top: `${event.rectangle.top}px`,
        width: '100%',
        height: `${event.rectangle.height}px`,
      };
      this.upperStyle = {
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100%',
        height: `${event.rectangle.top}px`,
      };
      this.lowerStyle = {
        position: 'fixed',
        left: '0',
        top: `${event.rectangle.bottom}px`,
        width: '100%',
        height: `calc(100% - ${event.rectangle.bottom}px)`,
      };
    } else if (divName === 'lower') {
      this.lowerStyle = {
        position: 'fixed',
        left: '0',
        top: `${event.rectangle.top}px`,
        width: '100%',
        height: `${event.rectangle.height}px`,
      };
      this.middleStyle = {
        ...this.middleStyle,
        top: `${this.upperStyle.height}`,
        height: `calc(100% - ${this.upperStyle.height} - ${event.rectangle.height}px)`,
      };
    }
  }
}
