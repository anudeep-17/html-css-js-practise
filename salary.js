function salarycal()
    {
        var wage_element = document.getElementById('wage');
      var wage = parseFloat(wage_element.value);
      var hours_element = document.getElementById('hours');
      var hours = parseFloat(hours_element.value);
      var calculate = wage * hours;
      var calculate2 = wage * hours * 52;
      document.getElementById('results').innerHTML = calculate;
      document.getElementById('resultyealy').innerHTML = calculate2;
    
    }
