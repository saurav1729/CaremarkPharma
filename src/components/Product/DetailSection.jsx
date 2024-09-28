import React from 'react'

const DetailSection = (props) => {
  console.log("props is", props);
  
  const { title, sections } = props.detaledData;

  return (
    <div className='w-10/12 mt-[4rem] mx-auto '>
     <h1 className="font-sans text-[2.3rem] font-semibold bg-gradient-to-b from-[#20b8c3] to-[#2a324c] bg-clip-text text-transparent text-pretty">{title}</h1>
     <div className='flex flex-col gap-3'>
     {
        sections.map((data, index) => (
          <div key={index} className='p-2 border border-[#2a324c] shadow-[2px_2px_1px_2px] shadow-[#20b8c3] rounded-[10px]' id={index}>
            <span className='text-[1.3rem] font-sans text-[#415186]'>{data.title}</span>
            <p className='text-[1.1rem]'>{data.content}</p>
          </div>
        ))
      }
     </div>
   
    </div>
  );
}

export default DetailSection;
