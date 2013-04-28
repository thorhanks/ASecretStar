$(document).ready(function()
{
	var currentQuoteIndex = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
	var quotes = new Array();
	quotes[0] =
	{
		quote: "&quot;Honestly, I just couldn't put this book down. And it was really difficult, because in reading it... all of the horrible things... there is times that you want to, but you just can't. You have to keep going, because you know that this little girl had to.&quot;",
		source: "- Chelsea Cheshire",
	};
	quotes[1] =
	{
		quote: "&quot;Powerful. Inspriational. Amazing. Krystyne is an amazing woman.&quot;",
		source: "- Judy Jackman",
	};
	quotes[2] =
	{
		quote: "&quot;I teach Sunday school, and I was studying for my lesson right before. It was about anger and forgiveness. I began in the bible, but the next thing I knew, God brought me to Krystyne's book. I read out of it the next Sunday morning, and it had such an amazing impact. This book will change lives.&quot;",
		source: "- Pat Barnett",
	};

	var Init = function()
	{
		var ChangeQuote = function()
		{
			// IF at end of quote array then reset to beginning
			if(currentQuoteIndex == 2)
				currentQuoteIndex = 0;
			else
				currentQuoteIndex++;
			
			UpdateQuote(currentQuoteIndex);
		};
		
		setInterval(ChangeQuote, 15000);
		
		ChangeQuote();
	};
	
	var UpdateQuote = function(quoteIndex)
	{
		var $quote = $("footer .quote");
		var $source = $("footer .source");
		
		$quote.hide().html(quotes[quoteIndex].quote).fadeIn("slow");
		$source.hide().html(quotes[quoteIndex].source).fadeIn("slow");
	};

	Init();
});