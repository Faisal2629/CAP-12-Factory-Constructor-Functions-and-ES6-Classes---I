// Factory function for iPhone1
function iPhone1(ASIN, color, display, camera) {
    return {
      ASIN,
      color,
      display,
      camera,
      dial() {
        return "tring.. tring...";
      },
      sendMessage() {
        return "Sending message...";
      },
      cameraClick() {
        return "Camera clicked";
      }
    };
  }
  
  // Factory function for iPhone2
  function iPhone2(ASIN, color, display, camera, bluetooth) {
    return {
      ASIN,
      color,
      display,
      camera,
      bluetooth,
      dial() {
        return "tring.. tring...";
      },
      sendMessage() {
        return "Sending message...";
      },
      cameraClick() {
        return "Camera clicked";
      },
      connectBluetooth() {
        return "Bluetooth connected successfully...";
      }
    };
  }
  
  // Test the functions
  function testFactoryFunctions() {
    const output = document.getElementById('output');
  
    // Create iPhone1 object
    const iphone1 = iPhone1("B07PGL2ZSL", "Black", "6.1-inch", "12MP");
    const iphone1Details = `
      <h2>iPhone1</h2>
      <p>ASIN: ${iphone1.ASIN}</p>
      <p>Color: ${iphone1.color}</p>
      <p>Display: ${iphone1.display}</p>
      <p>Camera: ${iphone1.camera}</p>
      <p>Dial: ${iphone1.dial()}</p>
      <p>Send Message: ${iphone1.sendMessage()}</p>
      <p>Camera Click: ${iphone1.cameraClick()}</p>
    `;
  
    // Create iPhone2 object
    const iphone2 = iPhone2("B07PGQY3QQ", "White", "6.5-inch", "12MP", "5.0");
    const iphone2Details = `
      <h2>iPhone2</h2>
      <p>ASIN: ${iphone2.ASIN}</p>
      <p>Color: ${iphone2.color}</p>
      <p>Display: ${iphone2.display}</p>
      <p>Camera: ${iphone2.camera}</p>
      <p>Bluetooth: ${iphone2.bluetooth}</p>
      <p>Dial: ${iphone2.dial()}</p>
      <p>Send Message: ${iphone2.sendMessage()}</p>
      <p>Camera Click: ${iphone2.cameraClick()}</p>
      <p>Connect Bluetooth: ${iphone2.connectBluetooth()}</p>
    `;
  
    // Display the details on the page
    output.innerHTML = iphone1Details + iphone2Details;
  }
  
  // Run the test
  testFactoryFunctions();
  
  