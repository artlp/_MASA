/* 3. Train objects and arrays. 
   Create 4 objects - of furniture pieces.
      Each one should have name, height (in meters)
      and method that converts the height from 
      meters to centimeters.
      Put all the objects into an array.
      Go with forEach over the array and convert
      the height of each object into centimeters. */

      const table = {
        height: 1,
      }
      const chair = {
        height: 0.6,
      }
      const sofa = {
        height: 0.4,
      }
      const wardrobe = {
        height: 2,
      }

      const furniture = [table, chair, sofa, wardrobe];
      console.log(furniture);

      for (e of furniture) {
        e.height = e.height*100;
      }

      console.log(furniture);