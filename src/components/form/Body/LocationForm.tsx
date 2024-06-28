"use client";
import FormInput from "@/components/form/FormInput";
import { Col, Row } from "antd";

const LocationForm = () => {
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
        <h1 className="text-heading text-primary uppercase mb-5">Category Information</h1>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="name" size="large" label="Name" />
          </Col>
          <Col
            className="gutter-row"
            span={8}
            style={{
              marginBottom: "10px",
            }}
          >
            <FormInput type="text" name="mapIframe" size="large" label="Map Link" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LocationForm;
