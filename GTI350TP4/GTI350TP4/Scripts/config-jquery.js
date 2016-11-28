


    $(document).ready(function () {


        $("#filter").click(function () {
            alert("Handler for .click() called.");
        });


        $("#processeur").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#processeur").find(".step-progression-block").css("opacity", 1);

            $("#processeur").find(".step-progression-block").attr("selected", "selected");

            var progress = $("div[selected='selected']").parent().attr("step");
            var step = parseInt(progress) + 1;
            changeImageForStep(step);
        });

        $("#hardrive").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
                })
          
            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#hardrive").find(".step-progression-block").css("opacity", 1);
            
            $("#hardrive").find(".step-progression-block").attr("selected", "selected");
            var progress = $("div[selected='selected']").parent().attr("step");
            changeImageForStep(parseInt(progress));
        })
       

        $("#motherboard").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#motherboard").find(".step-progression-block").css("opacity", 1);

            $("#motherboard").find(".step-progression-block").attr("selected", "selected");
            var progress = $("div[selected='selected']").parent().attr("step");
          
            changeImageForStep(parseInt(progress));
        });

        $("#graphicCard").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#graphicCard").find(".step-progression-block").css("opacity", 1);

            $("#graphicCard").find(".step-progression-block").attr("selected", "selected");
            var progress = $("div[selected='selected']").parent().attr("step");
            changeImageForStep(parseInt(progress));
        });

        $("#peripherique").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#peripherique").find(".step-progression-block").css("opacity", 1);

            $("#peripherique").find(".step-progression-block").attr("selected", "selected");
            var progress = $("div[selected='selected']").parent().attr("step");
            changeImageForStep(parseInt(progress));

        });

        $("#ram").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#ram").find(".step-progression-block").css("opacity", 1);

            $("#ram").find(".step-progression-block").attr("selected", "selected");
            var progress = $("div[selected='selected']").parent().attr("step");
            changeImageForStep(parseInt(progress));
        });

        $("#boitier").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#boitier").find(".step-progression-block").css("opacity", 1);

            $("#boitier").find(".step-progression-block").attr("selected", "selected");
            var progress = $("div[selected='selected']").parent().attr("step");
            changeImageForStep(parseInt(progress));

        });

        $("#piece1").click(function () {
            if ($("#newStar") !== "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')

        });
        $("#piece2").click(function () {
            if ($("#newStar") != "")
            {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')
        });
        $("#piece3").click(function () {
            if ($("#newStar") !== "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')
           
        });
        $("#piece4").click(function () {
            if ($("#newStar") !== "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')

        });
        $("#piece5").click(function () {
            if ($("#newStar") !== "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')

        });

        $("#piece6").click(function () {
            if ($("#newStar") !== "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')

        });

        $("#previousStep").click(function () {
            var progress = $("div[selected='selected']").parent().attr("step");
            $("div[step='" + progress + "']").find(".step-progression-block").removeAttr("selected")
            $("div[step='" + progress + "']").find(".step-progression-block").css("opacity", 0.5);
            var previousStep = parseInt(progress) - 1;
            $("div[step='" + previousStep + "']").find(".step-progression-block").attr("selected", "selected")
            $("div[step='" + previousStep + "']").find(".step-progression-block").css("opacity", 1);
            changeImageForStep(previousStep);
        });

        $("#nextStep").click(function () {
            var progress = $("div[selected='selected']").parent().attr("step");
            $("div[step='" + progress + "']").find(".step-progression-block").removeAttr("selected");
            $("div[step='" + progress + "']").find(".step-progression-block").css("opacity", 0.5);
            var nextStep = parseInt(progress) + 1;
            $("div[step='" + nextStep + "']").find(".step-progression-block").attr("selected", "selected");
            $("div[step='" + nextStep + "']").find(".step-progression-block").css("opacity", 1);
            changeImageForStep(nextStep);
        });

        function changeImageForStep(step)
        {
            if (step === 1)
            {
                var dataSet = [
              { src: "http://media.ldlc.com/ld/products/00/00/98/05/LD0000980501_1.jpg", spec1: "USB Slot:3", spec2: "Dim: 30x25", price: "Prix: 50.00$" },
              { src: "http://i2.cdscdn.com/pdt2/a/b/t/1/700x700/eca3321abt/rw/enermax-boitier-pc-thorex-eca3321a-bt-2u3.jpg", spec1: "USB Slot:4", spec2: "Dim: 40x30", price: "Prix: 75.00$" },
              { src: "http://i2.cdscdn.com/pdt2/8/8/5/1/700x700/adv3700104417885/rw/advance-boitier-pc-gamer-darktrooper.jpg", spec1: "USB Slot:5", spec2: "Dim: 50x40", price: "Prix: 50.00$" },
              { src: "http://img.clubic.com/download/image.php?id=04556408&h=0156&w=0156&crop=2&options=YToxOntzOjU6ImNvbG9yIjtzOjU6IndoaXRlIjt9", spec1: "USB Slot:3", spec2: "Dim: 35x30", price: "Prix: 50.00$" },
              { src: "http://microtek.fr/wp-content/uploads/2011/12/boitier1.jpg", spec1: "USB Slot:2", spec2: "Dim: 30x25", price: "Prix: 50.00$" },
              { src: "http://media.ldlc.com/ld/products/00/00/98/05/LD0000980501_1.jpg", spec1: "USB Slot:2", spec2: "Dim: 25x25", price: "Prix: 50.00$" }
                ];

            } else if (step === 2) {
                var dataSet = [
               { src: "http://www.intel.com/content/dam/support/us/en/images/processors/sb/img/corei5unlockedsbbox1to1nbg.jpg" , spec1: "Core:I5", spec2: "Dual-Core", price: "Prix: 200.00$" },
               { src: "http://i2.cdscdn.com/pdt2/5/4/9/1/700x700/int0735858305549/rw/processeur-intel-cpu-core-i3-6100-1151-box-3-7.jpg", spec1: "Core:I3", spec2: "One-Core", price: "Prix: 150.00$"  },
               { src: "https://images-na.ssl-images-amazon.com/images/I/41S993K53EL._SY355_.jpg", spec1: "Core:I7", spec2: "Quadra-Core", price: "Prix: 300.00$" },
               { src: "http://www.newpc-charenton.fr/2147-thickbox_default/processeur-intel-core-i7-6700-box-34ghz-a-40ghz-turbo.jpg", spec1: "Core:I7", spec2: "Dual-Core", price: "Prix: 250.00$" },
               { src: "https://images-na.ssl-images-amazon.com/images/I/81aAqEzKuDL._SY355_.jpg", spec1: "AMD-FX", spec2: "Dual-Core", price: "Prix: 50.00$" },
               { src: "https://images-na.ssl-images-amazon.com/images/I/51dgA33KpmL._SY355_.jpg", spec1: "AMD-A-Serie", spec2: "Quadra-Core", price: "Prix: 350.00$" }
                ];
            

            } else if (step === 3) {

                var dataSet = [
              { src: "http://www.corsair.com/Media/catalog/product/v/e/veng_k_angle_4.png", spec1: "Corsair", spec2: "16GB", price: "Prix: 250.00$" },
              { src: "https://d3fa68hw0m2vcc.cloudfront.net/5f3/125327552.jpeg", spec1: "Hyperx", spec2: "8GB", price: "Prix: 120.00$" },
              { src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_4SWvlLiHDCNo7MS2OZZuGzTXzaoEdl05q1d7xJiJYeXYE6RR", spec1: "Corsair", spec2: "32GB", price: "Prix: 350.00$" },
              { src: "http://www.geeky-gadgets.com/wp-content/uploads/2011/03/OWC-16GB-MacBook_pro.jpg", spec1: "OWC", spec2: "16GB", price: "Prix: 250.00$" },
              { src: "http://www.pcgameware.co.uk/images/Patriot-Viper-16Gb-2400MHz-Box-Contents.jpg", spec1: "Patriot Viper", spec2: "16GB", price: "Prix: 200.00$" },
              { src: "http://img.hexus.net/v2/memory/adata/xpg2133/ModulesB.jpg", spec1: "Xtreme Series", spec2: "8GB", price: "Prix: 125.00$" }
                ];


            } else if (step === 4) {

                var dataSet = [
              { src: "https://heavyeditorial.files.wordpress.com/2015/03/crucial.jpg?quality=65&strip=all&w=780&strip=all", spec1: "SSD", spec2: "256GB", price: "Prix: 150.00$" },
              { src: "http://techreport.com/r.x/2010_3_2_Western_Digital_launches_SiliconEdge_Blue_SSD/siliconedge-case.jpg", spec1: "SSD", spec2: "512GB", price: "Prix: 200.00$" },
              { src: "http://cdn2.expertreviews.co.uk/sites/expertreviews/files/0/81//seagate_desktop_hdd.jpg", spec1: "HDD", spec2: "512GB", price: "Prix: 100.00$" },
              { src: "http://www.domstechblog.com/wp-content/uploads/2012/10/ssd_crucial_full.jpg", spec1: "SDD", spec2: "128GB", price: "Prix: 100.00$" },
              { src: "http://pickthedeal.in/new/wp-content/uploads/2013/07/1tb-wd-int-3.jpg", spec1: "HDD", spec2: "1TB", price: "Prix: 200.00$" },
              { src: "http://www.oneclicksolutions.com.au/wp-content/uploads/2015/05/WD-Blue-HDD.jpg", spec1: "HDD", spec2: "1TB", price: "Prix: 150.00$" }
                ];

            } else if (step === 5) {

                var dataSet = [
              { src: "https://files.graphiq.com/5030/media/images/_4286738.jpg", spec1: "Intel", spec2: "Max RAM:32GB", price: "Prix: 250.00$" },
              { src: "http://cdn.mos.cms.futurecdn.net/b5XerwXJrsM6HFEDS9LAP4.png", spec1: "Intel", spec2: "Max RAM:128GB", price: "Prix: 375.00$" },
              { src: "http://www.pngall.com/wp-content/uploads/2016/04/Motherboard-PNG-Picture.png", spec1: "Asus", spec2: "Max RAM:64GB", price: "Prix: 350.00$" },
              { src: "http://s3.thingpic.com/images/9T/TJep3sKdVbHBroLoJqFf26Jv.jpeg", spec1: "GIGABYTE", spec2: "Max RAM:64GB", price: "Prix: 250.00$" },
              { src: "http://xtreview.com/images/Asus-P6T-deluxe-119.jpg", spec1: "Asus", spec2: "Max RAM:128GB", price: "Prix: 450.00$" },
              { src: "http://www.legitreviews.com/images/reviews/1024/asus_m4a785td_evo.jpg", spec1: "Asus", spec2: "Max RAM:64GB", price: "Prix: 350.00$" }
                ];

            } else if (step === 6) {

                var dataSet = [
              { src: "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/4039118/palit-x700-box.0.jpg", spec1: "Radeon", spec2: "ATI", price: "Prix: 250.00$" },
              { src: "http://www.ixbt.com/video3/images/g92-6/msi-9800gtx-box.jpg", spec1: "MSI", spec2: "GeForce", price: "Prix: 175.00$" },
              { src: "https://cdn0.vox-cdn.com/thumbor/AF17X4aK7TJ9rSZVSsOXuT9S5B0=/800x0/filters:no_upscale()/cdn0.vox-cdn.com/uploads/chorus_asset/file/4042624/frogmech2.0.jpg", spec1: "Nvidia", spec2: "GeForce", price: "Prix: 250.00$" },
              { src: "http://www.xbitlabs.com/images/video/axle-radeon-hd5670-1gb/axl5670_box-s.jpg", spec1: "Radeon", spec2: "ATI", price: "Prix: 150.00$" },
              { src: "http://www.pcgameware.co.uk/images/Gigabyte-GEFORCE-GTX-980Ti-G1-GAMING-box-front.jpg", spec1: "GIGABYTE", spec2: "GeForce", price: "Prix: 250.00$" },
              { src: "http://www.ixbt.com/video2/images/g73-5/biostar-7600gs-box.jpg", spec1: "Biostar", spec2: "GeForce", price: "Prix: 150.00$" }
                ];

            } else if (step === 7)     {

                var dataSet = [
              { src: "https://www.custompcreview.com/wp-content/uploads/2012/10/logitech-g710-plus-mechanical-gaming-keyboard-custom-pc-review-4.jpg", spec1: "Clavier", spec2: "Logitech", price: "Prix: 130.00$" },
              { src: "http://assets.razerzone.com/eeimages/products/17557/razer-blackwidow-chroma-gallery-05.png", spec1: "Clavier", spec2: "Razor", price: "Prix: 175.00$" },
              { src: "http://www.ixbt.com/peripheral/razer/deathadder/01.jpg", spec1: "Souris", spec2: "Razer", price: "Prix: 75.00$" },
              { src: "http://www.hardwareheaven.com/reviewimages/logitech-g500s-mouse/logitech-g500s-mouse_box.jpg", spec1: "Souris", spec2: "Logitech", price: "Prix: 50.00$" },
              { src: "https://i1.wp.com/www.modders-inc.com/wp-content/uploads/image/review_images/2013/Kraken_Headset/Box.jpg", spec1: "Écouteur", spec2: "Razer", price: "Prix: 110.00$" },
              { src: "http://www.pcgameware.co.uk/images/Plantronics-Gamecom-780-box-front.jpg", spec1: "Écouteur", spec2: "Plantronic", price: "Prix: 150.00$" }
                ];

            }
            $(".summary-background").each(function (index) {
                $(this).find("img").attr("src", dataSet[index].src);

            })
            $(".summary-line-2").each(function (index) {
                $(this).find("ul").remove();
                $(this).append('<ul><li>'+dataSet[index].spec1+'</li><li>'+dataSet[index].spec2+'</li><li>'+dataSet[index].price+'</li></ul>');
                
            })
            $("#newStar").remove();
        };
    });