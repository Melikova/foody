import editImg from 'assets/icons/edit.svg';
import trashImg from 'assets/icons/trash.svg';

export   const columns = [
    {
        title: 'Id',
        dataIndex: 'Id',
        key: 'Id',
      },
    {
        title: 'Image',
        dataIndex: 'Image',
        key: 'Image',
      },
    {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
      },
    {
        title: 'Slug',
        dataIndex: 'Slug',
        key: 'Slug',
      },
      {
        title: '',
        key: 'edit',
        render: (record) => (
            <div>
            <button>
            <img className='w-[19px] h-[19px]' src={editImg} alt='edit' />
        </button>
         <button>
         <img className='w-[18px] h-[19px]' src={trashImg} alt='delete' />
     </button>
     </div>
        ),
      },
      
]

 export const data = [
    {
        key: '1',
        Id: <span className=" borderId border-[1px] rounded-[8px] py-[2px] px-[12px] border-[#DFE2E9] text-[#454D59]">9123</span>,
         Image:  <img className="w-[40px] h-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg" alt="photo" />,
        Name: 'pizza',
        Slug:"Yummy-pizza-mizza"
      },
      {
        key: '2',
        Id: <span className=" borderId border-[1px] rounded-[8px] py-[2px] px-[12px] border-[#DFE2E9] text-[#454D59]">9123</span>,
        Image:  <img className="w-[40px] h-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg" alt="photo" />,
        Name: 'pizza',
        Slug:"Yummy-pizza-mizza"
      }, {
        key: '3',
        Id: <span className=" borderId border-[1px] rounded-[8px] py-[2px] px-[12px] border-[#DFE2E9] text-[#454D59]">9123</span>,
         Image:  <img className="w-[40px] h-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg" alt="photo" />,
        Name: 'pizza',
        Slug:"Yummy-pizza-mizza"
      }, {
        key: '4',
        Id: <span className=" borderId border-[1px] rounded-[8px] py-[2px] px-[12px] border-[#DFE2E9] text-[#454D59]">9123</span>,
        Image:  <img className="w-[40px] h-[40px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg" alt="photo" />,
        Name: 'pizza',
        Slug:"Yummy-pizza-mizza",
        
      },
      
      

]