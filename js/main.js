 (function($) {

            'use strict';

            // Loader function
            var loader = function() {
                setTimeout(function() { 
                    if ($('#loader').length > 0) {
                        $('#loader').removeClass('show');
                    }
                }, 1);
            };
            loader();

            // Dropdown hover effect
            $('nav .dropdown').hover(function() {
                var $this = $(this);
                $this.addClass('show');
                $this.find('> a').attr('aria-expanded', true);
                $this.find('.dropdown-menu').addClass('show');
            }, function() {
                var $this = $(this);
                $this.removeClass('show');
                $this.find('> a').attr('aria-expanded', false);
                $this.find('.dropdown-menu').removeClass('show');
            });

            $('#dropdown04').on('show.bs.dropdown', function() {
                console.log('show');
            });

            // Home slider initialization
            $('.home-slider').owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000, // Interval 5 detik
                margin: 0,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                nav: true,
                autoplayHoverPause: true,
                items: 1,
                navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"]
            });

            // Refresh slider on scroll
            $(window).on('scroll', function() {
                var $slider = $('.home-slider');
                if ($slider.length && !$slider.hasClass('scroll-activated')) {
                    $slider.addClass('scroll-activated');
                    $slider.trigger('refresh.owl.carousel');
                }
            });

            // Animation on scroll with Waypoints
            var contentWayPoint = function() {
                var i = 0;
                $('.element-animate').waypoint(function(direction) {
                    if (direction === 'down' && !$(this.element).hasClass('element-animated')) {
                        i++;
                        $(this.element).addClass('item-animate');
                        setTimeout(function() {
                            $('body .element-animate.item-animate').each(function(k) {
                                var el = $(this);
                                setTimeout(function() {
                                    var effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn element-animated');
                                    } else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft element-animated');
                                    } else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight element-animated');
                                    } else {
                                        el.addClass('fadeInUp element-animated');
                                    }
                                    el.removeClass('item-animate');
                                }, k * 100);
                            });
                        }, 100);
                    }
                }, { offset: '95%' });
            };
            contentWayPoint();

        })(jQuery);
