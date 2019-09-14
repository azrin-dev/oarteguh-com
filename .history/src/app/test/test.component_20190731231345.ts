import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

   editorConfig: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '20rem',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
         {class: 'arial', name: 'Arial'},
         {class: 'times-new-roman', name: 'Times New Roman'},
         {class: 'calibri', name: 'Calibri'},
         {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
         { name: 'quote', class: 'quote' },
         { name: 'redText', class: 'redText' },
         { name: 'titleText', class: 'titleText', tag: 'h1' },
      ],
      uploadUrl: 'v1/image',
      sanitize: true,
      toolbarPosition: 'top',
   };
   htmlContent = new FormControl('');

  constructor() { }

  ngOnInit() {

  }

  contentEvent(event){
     console.log(event.target.value);
  }

}
