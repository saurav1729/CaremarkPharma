import React from "react";
import { useState } from "react";

const SearchBox = () => {
  const [btnclass, setBtnclass] = useState("fa-magnifying-glass");
  const[searchText,setText]=useState("");
  return (
    <div
      name="search-contaier"
      className="absolute h-[40px] top-[45%] left-[33%] bg-[#fff] w-[450px] p-[5px] shadow-[#d688d0] shadow-[0_2px_8px] rounded-[50px] flex items-center  overflow-hidden justify-between"
    >
    
      <i
        className={
          btnclass +
          " " +
          "fa-solid" +
          " " +
          "mr-[5px] cursor-pointer text-[20px]  hover:scale-110 ml-2 text-[#7A7A7A]"
        }
        onClick={() => {
          if (searchText === "") {
            setBtnclass("fa-magnifying-glass");
          } else {
            if (btnclass === "fa-magnifying-glass") {
              // if (searchText.length === 0) {
              //   setResList(defaultList);
              // } else {
              //   const filteredRestaurants = defaultList.filter((res) => {
              //     const nameMatch = res?.info?.name
              //       .toLowerCase()
              //       .includes(searchText.toLowerCase());
              //     return nameMatch;
              //   });

              //   setResList(filteredRestaurants);
              //   console.log(searchText);
              // }
              setBtnclass("fa-xmark");
            } else {
              // setResList(defaultList);
              setBtnclass("fa-magnifying-glass");
              setText("");
            }
          }
        }}
      ></i>
      <input
        className="w-[500px] text-[13px] h-[24px] ms-[9px] text-ellipsis text-left focus:outline-none placeholder:text-[#7A7A7A] "
        type="search"
        placeholder="Search for medicine e.g.abc 500mg"
        value={searchText}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (true) {
            if (searchText.length === 0) {
              // setResList(defaultList);
            } else {
              // const filteredRestaurants = defaultList.filter((res) => {
              //   const nameMatch = res?.info?.name
              //     .toLowerCase()
              //     .includes(searchText.toLowerCase());
              //   return nameMatch;
              // });

              // setResList(filteredRestaurants);
              setBtnclass("fa-xmark");
            }
          }
        }}
      ></input>
      <div className="h-[50px] w-[128px] bg-[#1BC768] cursor-pointer flex justify-center items-center -mx-3 text-[#ffffff] text-[20px]">
        Search
      </div>
      {/* <div className="search-box bg-[#fff] rounded-[20px] mobile:w-4/12 p-[10px] shadow-[#d688d0] shadow-[0_2px_8px] flex justify-between relative">
      <input
      className="bg-[#0000] mt-1 w-9/12 h-[20px]  text-[18px] ms-[9px] text-ellipsis text-left focus:outline-none placeholder:text-[#bd7979] "
        type="search"
        placeholder="search for best resturants out there"
        value={searchText}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => { 
          if (true) { 
            if (searchText.length === 0) {
              setResList(defaultList);
            }
            else{
              const filteredRestaurants = defaultList.filter((res) => {
                const nameMatch = res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                return nameMatch;
              });

              setResList(filteredRestaurants);
              setBtnclass("fa-xmark");
              
            } 
          }
        }
          } 
            
      
      ></input>
      <div className="w-[40px] h-[42px] top-[1] pr-2 absolute right-0 p-[10px]  border-r-gray  rounded-[0px_20px_20px_0]" style={{ boxShadow: "-1px 0px 3px #94bbe9"}}>
      <i
      
        className={btnclass + " " + "fa-solid" + " " + "mr-[5px] cursor-pointer text-[20px]  hover:scale-110"}
        onClick={() => {
          if(searchText===""){
            setBtnclass("fa-magnifying-glass");
          }
          else{
          if (btnclass === "fa-magnifying-glass") {
            if (searchText.length === 0) {
              setResList(defaultList);
            } else {
              const filteredRestaurants = defaultList.filter((res) => {
                const nameMatch = res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
                return nameMatch;
              });

              setResList(filteredRestaurants);
              console.log(searchText);
            }
            setBtnclass("fa-xmark");
          } else {
            // setResList(defaultList);
            setBtnclass("fa-magnifying-glass");
            setText("");
          }
        }}}
      ></i>
      </div>
    </div> */}
    </div>
  );
};

export default SearchBox;
