import { analyzeAndValidateNgModules } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  private images = [
    {
      id: 1,
      active: '/assets/images/0.jpg',
      desactive: '/assets/images/poker.png',
    },
    {
      id: 2,
      active: '/assets/images/1.jpg',
      desactive: '/assets/images/poker.png',
    },
    {
      id: 3,
      active: '/assets/images/2.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 4,
      active: '/assets/images/3.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 5,
      active: '/assets/images/4.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 6,
      active: '/assets/images/5.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 7,
      active: '/assets/images/6.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 8,
      active: '/assets/images/7.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 9,
      active: '/assets/images/8.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 10,
      active: '/assets/images/9.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 11,
      active: '/assets/images/10.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 12,
      active: '/assets/images/11.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 13,
      active: '/assets/images/12.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 14,
      active: '/assets/images/13.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 15,
      active: '/assets/images/14.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 16,
      active: '/assets/images/15.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 17,
      active: '/assets/images/16.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 18,
      active: '/assets/images/17.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 19,
      active: '/assets/images/18.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 20,
      active: '/assets/images/19.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 21,
      active: '/assets/images/20.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 22,
      active: '/assets/images/21.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 23,
      active: '/assets/images/22.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 24,
      active: '/assets/images/23.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 25,
      active: '/assets/images/24.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 26,
      active: '/assets/images/25.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 27,
      active: '/assets/images/26.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 28,
      active: '/assets/images/27.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 29,
      active: '/assets/images/28.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 30,
      active: '/assets/images/29.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 31,
      active: '/assets/images/30.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 32,
      active: '/assets/images/31.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 33,
      active: '/assets/images/32.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 34,
      active: '/assets/images/33.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 35,
      active: '/assets/images/34.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 36,
      active: '/assets/images/35.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 37,
      active: '/assets/images/36.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 38,
      active: '/assets/images/37.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 39,
      active: '/assets/images/38.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 40,
      active: '/assets/images/39.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 41,
      active: '/assets/images/40.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 42,
      active: '/assets/images/41.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 43,
      active: '/assets/images/42.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 44,
      active: '/assets/images/43.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 45,
      active: '/assets/images/44.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 46,
      active: '/assets/images/45.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 47,
      active: '/assets/images/46.jpg',
      desactive: '/assets/images/poker.png',
    }
    ,
    {
      id: 48,
      active: '/assets/images/47.jpg',
      desactive: '/assets/images/poker.png',
    }
  ];
  public soundhit=new Audio('/assets/sounds/campana.mp3');
  public sounderror=new Audio('/assets/sounds/error.mp3');
  public images_Back = '/assets/images/poker.png';
  public cards: any = [];
  private last_Select_Id:number = -1;
  private Hits = 16;
  private count_Hits = 0;
  public Attempts = 20;
  public cont_Attempts = 0;
  constructor() {}

  ngOnInit() {

    let count_index = this.RandomStartIndex(this.images,16);
    console.log("que me llega "+count_index);
    let actual_index=count_index;
    for (let i = 0; i < this.Hits * 2; i++) {
      if (i == this.Hits) {
        count_index = actual_index;
      }
      let img = this.images[count_index];
      console.log("que pasa "+count_index);
      this.cards.push({id: img.id,aurl: img.active,durl: img.desactive,visible: false,active: true,});
      count_index++;
    }
    console.log(this.cards);
    this.RandomArray(this.cards);
  }

  card_selected(idx: any) {
    if (!this.cards[idx].active) {
      return;
    }
    this.cards[idx].visible = true;
    if (this.last_Select_Id == -1) {
      this.last_Select_Id = idx;
      this.cards[idx].visible = true;
      this.cards[idx].active = false;
      document.getElementById(idx)!.style.display='none';
    } else {
      if (this.cards[this.last_Select_Id].id == this.cards[idx].id) {
        this.count_Hits++;
        console.log("actual"+idx+"anterior"+this.last_Select_Id);
        this.cards[idx].visible = true;
        this.cards[idx].active = false;
        document.getElementById(idx)!.style.display='none';
        document.getElementById(this.last_Select_Id+'')!.style.display='none';
        this.last_Select_Id = -1;
        console.log("iguales");
        console.log(this.cards);
        this.soundhit.play();
      } else {
        let _this = this;
        document.getElementById(idx)!.style.display='none';
        this.sounderror.play();
        setTimeout(function () {
          _this.cards[_this.last_Select_Id].visible = false;
          _this.cards[_this.last_Select_Id].active = true;
          _this.cards[idx].visible = false;
          document.getElementById(idx)!.style.display='block';
          document.getElementById(_this.last_Select_Id+'')!.style.display='block';
          _this.last_Select_Id = -1;
        }, 3000);
      }
    }
  }

  RandomStartIndex(array:any,lent:number){
    let ramdonIndex:any;
    let size:number;
    size=(array.length+6)/lent;
    ramdonIndex=Math.floor(Math.random() * size);
    console.log("ramdom " + ramdonIndex);
    switch (ramdonIndex) {
      case 0:
        return 0;
      case 1:
        return 16;
      case 2:
        return 31;
        default:
          return 0;
    }
  }


  RandomArray(array: any) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
}
