import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { listCoupons } from "../../redux/actions/coupons.actions";

const FilterForm = ({ listCoupons }) => {
  const [formData, setFormData] = useState({
    searchText: "",
    type: "all",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    listCoupons(formData);
  };

  return (
    <div className="center-content">
      <legend className="text-center">
        Filters
        <hr />
      </legend>

      <Form className="my-4" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by platform name, title, description"
            as="input"
            htmlSize="80"
            name="searchText"
            value={formData.searchText}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type of discount</Form.Label>
          <Form.Control as="select" name="type" onChange={handleChange} custom>
            <option value="all">All</option>
            <option value="flat">Flat</option>
            <option value="percentage">Percentage</option>
            <option value="free">Free</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">Apply Filters</Button>
      </Form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  listCoupons: (filters = {}) => dispatch(listCoupons(filters)),
});

export default connect(null, mapDispatchToProps)(FilterForm);