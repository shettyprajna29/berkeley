var $parent = $(".media-page"),
    $items = $parent.find(".col-md-4"),
    $loadMoreBtn = $("#load-more-comments"),
    maxItems = 6,
    hiddenClass = "visually-hidden";

		// add visually hidden class to items beyond maxItems
		$.each($items, function(idx,loadmoreclg){
      if(idx > maxItems - 1){
        $(this).addClass(hiddenClass);
      }
    });

		// onclick of show more button show more = maxItems
		// if there are none left to show kill show more button
		$loadMoreBtn.on("click", function(e){
      $("."+hiddenClass).each(function(idx,loadmoreclg){
        if(idx < maxItems - 1){
          $(this).removeClass(hiddenClass);
        }
        // kill button if no more to show
        if($("."+hiddenClass).size() === 0){
          $loadMoreBtn.hide();
        }
      });
    });