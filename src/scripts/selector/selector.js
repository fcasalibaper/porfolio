import $ from 'jquery';

export default function Selector() {
    const oceano = {
        init: () => {
            $(document).ready(function(){
                oceano.ready();
            }); 
        },

        ready: () => {
            oceano.dropDown();
            oceano.tabsSelector.init();
        },

        // Drodown
        dropDown : () => {
            const $btnClick = $('.dropdown--clickEvent');
            $btnClick.on('click', function () {
              $(this).toggleClass('active').find('.dropdown').toggleClass('active')
            })
        },

        tabsSelector : {
            init : () => {
                oceano.tabsSelector.click();
            },

            click : () => {
                let $btnClick = $('.tabs__selector__box');
    
                $btnClick.on('click', function(e) {
                    let $this = $(this);
                    let rel = $this.attr('rel');

                    if ( !$this.hasClass('active') ) {
                        $this.siblings().removeClass('active');
                        $this.addClass('active');
                        oceano.tabsSelector.openTab(rel);
                    }
                    e.stopPropagation()
                })
            },

            openTab : (el) => {
                $(`#${el}`).siblings().removeClass('active');
                $(`#${el}`).addClass('active');
            },
        }
    };

    oceano.init();

};
Selector();
