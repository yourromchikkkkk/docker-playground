<html>
  <body>
    <h1>Apparel prices:</h1>
    <ul>
      <?php
        $json = file_get_contents('http://prices/');
        $apparel_with_prices = json_decode($json);
        foreach ($apparel_with_prices as $item) {
          echo "<li><h3>$item->name - <span>$item->price</span></h3></li>";
        }
      ?>
    </ul>

    <!-- THIS IS UNAVAILABLE DUE TO NETWORK RESTRICTIONS  -->
    <!-- <h2>Apparel list:</h2>
    <ul>
      <?php
        $json = file_get_contents('http://apparel/');
        $apparel_list = json_decode($json);
        foreach ($apparel_list as $apparel) {
          echo "<li><h3>$item->name</li>";
        }
      ?>
    </ul> -->
  </body>
</html>
