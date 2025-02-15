// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const amusementParks = ["Disney World", "Hershey Park", "Six Flags", "Dorney Park", "Sea World"];
//Complete task one below
amusementParks.forEach((park) => {
  console.log(park+" is a great amusement park");
})




const rollerCoasters = ["Big Thunder Mountain Railroad","Splash Mountain","Space Mountain", "Expedition Everest", "The Twilight Zone Tower of Terror"];
//Complete task two below
for (let i = 0; i < rollerCoasters.length; i++){
  if(rollerCoasters[i] === "Space Mountain"){
    break;
  }
  console.log("I will ride "+rollerCoasters[i]);
}


let height = 6;


//Complete task three below
while(height>4){
  console.log("Next customer.");
  var number;
  number = Math.floor(Math.random()*6+2);
  height = number;
}
