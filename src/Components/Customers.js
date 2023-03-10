import { useEffect,useState } from 'react'

//UPDATE


function Customers() {
  const [iscustomer, setIscustomer] = useState(false)

  useEffect(() => {
    const display = document.getElementById('displayCustomers')

    const onClick = async () => {
      setIscustomer(true)

      const response = await fetch(`http://localhost:3400/getcustomers`)
      const element = await response.json()

      element.customers.forEach((element,index) => {
        
        display.innerHTML +=
          `
            <tr>
            <td>${index+1}</td>
            <td>${element.first_name}</td>
            <td>${element.last_name}</td>
            <td>${element.email}</td>
            <td><button class="btn btn-primary"><a class="text-white" href="/singlePage/${element.id}">See More Details</a></button></td>
            </tr>`
      });
    }
    onClick();

  }, [])








  return (
    <>
      <div className='container'>
        <h2 className='text-center my-3'> ALL CUSTOMER DETAILS</h2>
       <table className="table" id="displayCustomers">
       {iscustomer?<tbody>
            <tr>
              <th scope="row">S.NO</th>
              <th scope="row">FIRST NAME</th>
              <th scope="row">LAST NAME</th>
              <th scope="row">EMAIL</th>
            </tr> 
          </tbody>:""}
        </table>
      </div>


    </>
  )
}

export default Customers
