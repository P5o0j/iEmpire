(function () {
  const apiDiv = document.querySelector(".api");

  const renderGain = function (data) {
    // Clear the existing content before rendering new data
    apiDiv.textContent = ""; // Clear the existing content
    const tickerInfo = data.map((element) => {
      const arrow = element.change_percentage.startsWith("-") ? "🔻" : "🔼";
      return `${element.ticker} ${arrow}${element.change_percentage}`;
    });
    apiDiv.setAttribute("data-text", tickerInfo.join(" | "));
  };

  const testAPI = async function () {
    try {
      const res = await fetch(
        "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=PEVG0E0VTLLODU5V"
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log(data);
      const topGain = data.top_gainers;
      const topLoose = data.top_losers;

      const dataArr = topGain.concat(topLoose);

      console.log(topGain, topLoose, dataArr);

      if (!topGain || topGain.length === 0) {
        throw new Error("No data available");
      }

      renderGain(dataArr);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // Call the testAPI function
  testAPI();
})();
