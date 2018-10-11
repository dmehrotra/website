$(window).resize(function() {

	if ($(window).width() < 956) {
				$('.grid-item').removeClass("section-medium")

	 $('.grid-item').addClass("section-slim")
	}

	else {
		$('.grid-item').removeClass("section-slim")

		$('.grid-item').removeClass("section-medium")
	}
});