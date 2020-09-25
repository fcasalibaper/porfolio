import $ from 'jquery';
import { checkIsInScreen } from '../utils/utils';

export default function General() {
    const oceano = {
        init: () => {
            $(document).ready(function(){
                oceano.ready();
            }); 
        },

        ready: () => {
            // toolResponsive();
            oceano.onScroll();
            oceano.menuOpen();
            oceano.scrollElement('#referenceFixedPosition');
        },

        onScroll : () => {
            $('body, html').scroll(function() {
                oceano.scrollElement('#referenceFixedPosition');
            });
        },

        scrollElement : (el) => {
            if ( $(el).length ) {
                const element = checkIsInScreen(el, true)
                const $ref = $('#referenceFixedPosition');
                const $elementToAddFixed = $('#elementToAddFixedPosition')
                if ( element === false ) {
                    $ref.addClass('elementOffset')
                    $elementToAddFixed.addClass('fixedPosition');
                } else {
                    $ref.removeClass('elementOffset');
                    $elementToAddFixed.removeClass('fixedPosition');
                }
            }
        },

        // MENU MOBILE
        menuOpen : () => {
            const $elAction = $('.menu--hamburger');
            const $body = $('body');

            $elAction.add('.header__links > li a').add('.overlay').on('click', function(event){
                $body.toggleClass('openMenu');
            });
        }
    };

    oceano.init();

};
General();
