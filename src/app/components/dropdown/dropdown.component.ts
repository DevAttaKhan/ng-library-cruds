import {
  Component,
  HostListener,
  Input,
  OnInit,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  isOpen: boolean = false;
  @Input() selectedItem: IOption = { id: 1, value: 'select genere' };
  disabled = false;
  private onTouched!: Function;
  private onChanged!: Function;

  writeValue(obj: any): void {
    this.selectedItem = obj || { id: 1, value: 'select genere' };
    console.log(obj);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  data: IOption[] = [
    { id: -1, value: 'Select Item' },
    { id: 1, value: 'action' },
    { id: 1, value: 'fantasy' },
    { id: 1, value: 'comedy' },
    { id: 1, value: 'thriller' },
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: IOption) {
    this.onTouched();
    this.selectedItem = item;
    this.onChanged(item);
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.closest('.dropdown')) return;
    this.isOpen = false;
  }

  ngOnInit(): void {}
}

interface IOption {
  id: number;
  value: string;
}
