


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

            $("#processeur").find(".step-progression-block").attr("selected", true);
        });

        $("#hardrive").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
                })
          
            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#hardrive").find(".step-progression-block").css("opacity", 1);
            
            $("#hardrive").find(".step-progression-block").attr("selected", true);
        })
       

        $("#motherboard").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#motherboard").find(".step-progression-block").css("opacity", 1);

            $("#motherboard").find(".step-progression-block").attr("selected", true);
        });

        $("#graphicCard").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#graphicCard").find(".step-progression-block").css("opacity", 1);

            $("#graphicCard").find(".step-progression-block").attr("selected", true);
        });

        $("#peripherique").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#peripherique").find(".step-progression-block").css("opacity", 1);

            $("#peripherique").find(".step-progression-block").attr("selected", true);

        });

        $("#ram").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#ram").find(".step-progression-block").css("opacity", 1);

            $("#ram").find(".step-progression-block").attr("selected", true);


        });

        $("#boitier").find("a").click(function () {
            $(".step-progression-block").each(function (index) {
                $(this).css("opacity", 0.5);
            })

            $(".step-progression-block").each(function (index) {
                $(this).removeAttr("selected");
            })
            $("#boitier").find(".step-progression-block").css("opacity", 1);

            $("#boitier").find(".step-progression-block").attr("selected", true);

        });

        $("#piece1").click(function () {
            if ($("#newStar") != "") {
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
            if ($("#newStar") != "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')
           
        });
        $("#piece4").click(function () {
            if ($("#newStar") != "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')

        });
        $("#piece5").click(function () {
            if ($("#newStar") != "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')

        });

        $("#piece6").click(function () {
            if ($("#newStar") != "") {
                $("#newStar").remove();
                $(".summary-background").each(function (index) {
                    $(this).find("img").css("opacity", 0.3);
                })
            }
            $(this).find("img").css("opacity", "1");
            $(this).find(".summary-body").find(".summary-line-1").before('<img src="http://pngimg.com/upload/star_PNG1592.png" id=newStar style="max-height:30px;max-width:30px;position:absolute"/>')

        });

        $("#previousStep").click(function () {
            var progress = $("div[selected='true']").parent().attr("step");

        });

        $("#nextStep").click(function () {
            var progress = $("div[selected='true']").parent().attr("step");

        });


    });