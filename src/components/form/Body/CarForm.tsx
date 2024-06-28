"use client";
import FormInput from "@/components/form/FormInput";
import FormUploadFile from "@/components/form/FormUploadFile";
import { Checkbox, Col, Row } from "antd";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";
import LocationSelect from "../FormLocationSelect";
import FormCheckboxField from "../FormCheckbox";

const CarForm = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "10px",
        }}
      >
        <h1 className="text-heading text-primary uppercase mb-5">Car Information</h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="title" size="large" label="Title" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormTextArea name="description" rows={3} label="Description" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormUploadFile name="image" label="Image" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <LocationSelect name="location" label="Location" size="large" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="rentPerDay" size="large" label="Rent Per Day" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="seats" size="large" label="Seats" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="bags" size="large" label="Bags" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="number" name="dors" size="large" label="Dors" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              name="fuel"
              label="Fuel"
              size="large"
              options={[
                { label: "Petrol", value: "petrol" },
                { label: "Diesel", value: "diesel" },
                { label: "CNG", value: "cng" },
                { label: "Electric", value: "electric" },
              ]}
            />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormSelectField
              name="category"
              label="Category"
              size="large"
              options={[
                { label: "Medium", value: "medium" },
                { label: "Premium", value: "premium" },
                { label: "Small", value: "small" },
                { label: "Large", value: "large" },
                { label: "SUVs", value: "SUVs" },
                { label: "People Carrier", value: "People Carrier" },
                { label: "Estate", value: "Estate" },
              ]}
            />
          </Col>
          <Col
            className="gutter-row"
            span={24}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormCheckboxField name="ac" label="AC" />
            <FormCheckboxField name="automatic" label="Automatic" />
            <FormCheckboxField name="featured" label="Featured" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CarForm;
