import Vue from 'vue'
import App from './App.vue'
require ('./styles.scss')

new Vue({
  el: '#date',
    data: {
        type: 'button_sql',
        shop: 'button_shopyes',
        workstations: 1,
        disabletype: 'button_notdown',
        intel: 'Autoинтеллек'
    },
    methods: {
        makeActiveDate: function(item){
            // Когда модель будет изменена, представление обновится.
            this.type = item;
            if (item == 'button_sqlite') {
                this.shop = 'button_shopno_lock';
            }
            else {
                if (this.shop == 'button_shopno_lock') {
                    this.shop = 'button_shopno'
                }
            }
        },
        makeActiveShop: function(item) {
          if (this.type == 'button_sql') {
              this.shop = item;
          }
        },
        changeWorkstations: function(item) {
          if (!(item == -1 && this.workstations == 1)) {
              this.workstations += item;
              if (this.workstations > 1) {
                  this.disabletype = 'button_down_active';
              }
              else {
                  this.disabletype = 'button_down_disable';
              }
          }
        },
        changeAutoIntell: function(item) {
            this.intel = item;
        }
    }
})
