import React from 'react'
import { Form } from 'react-bootstrap';

const SupplierComp = () => {
  return (
    <div>
         <div className="mt-5">
            <div className="filter-textt">Supplier</div>

            <Form>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                className="filter-chktxt"
                type={type}
                id={`default-${type}`}
                label={`AliExpress `}
              />
              <Form.Check
                className="filter-chktxt"
                type={type}
                id={`default-${type}`}
                label={`ebay `}
              />

              <Form.Check
                className="filter-chktxt"
                type={type}
                id={`default-${type}`}
                label={`amazon `}
              />

             
            </div>
          ))}
        </Form>
          </div>
    </div>
  )
}

export default SupplierComp ;