import {Component, ElementRef, EventEmitter, Inject, Output, Renderer2, ViewChild} from '@angular/core';
import {AngularEditorService} from './angular-editor.service';
import {HttpResponse} from '@angular/common/http';
import {DOCUMENT} from '@angular/common';
import {CustomClass, Font} from './config';
import { FormControl, FormGroup } from '@angular/forms';
import { primaryButtonClick } from '../animations/anim-fn';

export interface Element{
   id: string,
   color: string
};

@Component({
  selector: 'angular-editor-toolbar',
  templateUrl: './angular-editor-toolbar.component.html',
  styleUrls: ['./angular-editor-toolbar.component.scss']
})

export class AngularEditorToolbarComponent {
  id = '';
  htmlMode = false;
  showToolbar = true;
  linkSelected = false;
  block = 'Header';
  defaultFontId;
  fontName;
  fontSize = '5';
  foreColour;
  backColor;
  fonts: Font[];
  customClassId = -1;
  customClasses: CustomClass[];
  uploadUrl: string;
  tagMap = {
    BLOCKQUOTE: 'indent',
    A: 'link'
  };
  select = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'PRE', 'DIV'];
  buttons = [  'bold', 'italic', 'underline', 
               'strikeThrough', 'subscript', 'superscript', 
               'justifyLeft', 'justifyCenter', 'justifyRight', 
               'justifyFull', 'indent', 'outdent', 
               'insertUnorderedList', 'insertOrderedList'
   ];
   initColor = 'accent';
   element: Element = { 
      id: this.id,
      color: 'accent'
   };

  @Output() execute: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('fileInput', {static: false}) myInputFile: ElementRef;

  public get isLinkButtonDisabled(): boolean {
    return this.htmlMode || !Boolean(this.editorService.selectedText);
  }

  constructor(
    private r: Renderer2,
    private editorService: AngularEditorService,
    @Inject(DOCUMENT) private doc: any
  ) { 
  }

   /**
      * Trigger command from editor header buttons
      * @param command string from toolbar buttons
      */
   triggerCommand(event) {
      const innerHTML = event.target.innerHTML.trim();
      const command = event.target.offsetParent.id.trim();
      const newId = command + '-' + innerHTML;
      this.element = {
         id: newId.trim(),
         color: 'primary'
      };
      console.log(this.element);
      this.execute.emit(command);
   }

   extractId(id){
      console.log(this.element);
   }

  /**
   * highlight editor buttons when cursor moved or positioning
   */
   triggerButtons() {
      if (!this.showToolbar) {
            return;
      }
      this.buttons.forEach(e => {
         const result = this.doc.queryCommandState(e);
         const elementById = this.doc.getElementById(e + '-' + this.id); 
         console.log(elementById);

         if(result) (elementById != null)
               ?  this.element = {
                     id: elementById,
                     color: 'primary'
                  }
               :  this.element = {
                     id: elementById,
                     color: 'accent'
                  };
               // this.r.addClass(elementById, 'active')
               // this.r.removeClass(elementById, 'active');
         else return;
      });      
   }

   /**
      * trigger highlight editor buttons when cursor moved or positioning in block
      */
   triggerBlocks(nodes: Node[]) {
      if (!this.showToolbar) {
         return;
      }
      this.linkSelected = nodes.findIndex(x => x.nodeName === 'A') > -1;
      let found = false;
      this.select.forEach(y => {
         const node = nodes.find(x => x.nodeName === y);
         if (node !== undefined && y === node.nodeName) {
         if (found === false) {
            this.block = node.nodeName.toLowerCase();
            found = true;
         }
         } else if (found === false) {
         this.block = 'default';
         }
      });

      found = false;
      if (this.customClasses) {
         this.customClasses.forEach((y, index) => {
         const node = nodes.find(x => {
            if (x instanceof Element) {
               return x.className === y.class;
            }
         });
         if (node !== undefined) {
            if (found === false) {
               this.customClassId = index;
               found = true;
            }
         } else if (found === false) {
            this.customClassId = -1;
         }
         });
      }

      /*
      Object.keys(this.tagMap).map(e => {
         const elementById = this.doc.
         (this.tagMap[e] + '-' + this.id);
         const node = nodes.find(x => x.nodeName === e);
         if (node !== undefined && e === node.nodeName) {
         this.r.addClass(elementById, 'active');
         } else {
         this.r.removeClass(elementById, 'active');
         }
      });
      */

      this.foreColour = this.doc.queryCommandValue('ForeColor');
      this.fontSize = this.doc.queryCommandValue('FontSize');
      this.fontName = this.doc.queryCommandValue('FontName').replace(/"/g, '');
      this.backColor = this.doc.queryCommandValue('backColor');
   }

  /**
   * insert URL link
   */
  insertUrl() {
    let url = 'https:\/\/';
    const selection = this.editorService.savedSelection;
    if (selection && selection.commonAncestorContainer.parentElement.nodeName === 'A') {
      const parent = selection.commonAncestorContainer.parentElement as HTMLAnchorElement;
      if (parent.href !== '') {
        url = parent.href;
      }
    }
    url = prompt('Insert URL link', url);
    if (url && url !== '' && url !== 'https://') {
      this.editorService.createLink(url);
    }
  }

  /**
   * insert Video link
   */
  insertVideo() {
    this.execute.emit('');
    const url = prompt('Insert Video link', `https://`);
    if (url && url !== '' && url !== `https://`) {
      this.editorService.insertVideo(url);
    }
  }

  /** insert color */
  insertColor(color: string, where: string) {
    this.editorService.insertColor(color, where);
    this.execute.emit('');
  }

  /**
   * set font Name/family
   * @param foreColor string
   */
  setFontName(foreColor: string): void {
    this.editorService.setFontName(foreColor);
    this.execute.emit('');
  }

  /**
   * set font Size
   * @param fontSize string
   */
  setFontSize(fontSize: string): void {
    this.editorService.setFontSize(fontSize);
    this.execute.emit('');
  }

  /**
   * toggle editor mode (WYSIWYG or SOURCE)
   * @param m boolean
   */
  setEditorMode(m: boolean) {
    const toggleEditorModeButton = this.doc.getElementById('toggleEditorMode' + '-' + this.id);
    if (m) {
      this.r.addClass(toggleEditorModeButton, 'active');
    } else {
      this.r.removeClass(toggleEditorModeButton, 'active');
    }
    this.htmlMode = m;
  }

  /**
   * Upload image when file is selected
   */
  onFileChanged(event) {
    const file = event.target.files[0];
    if (file.type.includes('image/')) {
        if (this.uploadUrl) {
            this.editorService.uploadImage(file).subscribe(e => {
              if (e instanceof HttpResponse) {
                this.editorService.insertImage(e.body.imageUrl);
                this.fileReset();
              }
            });
        } else {
          const reader = new FileReader();
          reader.onload = (e: ProgressEvent) => {
            const fr = e.currentTarget as FileReader;
            this.editorService.insertImage(fr.result.toString());
          };
          reader.readAsDataURL(file);
        }
      }
  }

  /**
   * Reset Input
   */
  fileReset() {
    this.myInputFile.nativeElement.value = '';
  }

  /**
   * Set custom class
   */
  setCustomClass(classId: number) {
    this.editorService.createCustomClass(this.customClasses[classId]);
  }
}
