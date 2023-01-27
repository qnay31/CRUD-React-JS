import React from "react";
import { Form, Button } from "react-bootstrap";

const FormData = ({
  nama,
  deskripsi,
  harga,
  id,
  handleChange,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <h5 className="mt-4">{id ? `Form Edit Data` : `Form Input Barang`}</h5>
      <Form.Group className="mb-3" controlId="formBasicBarang">
        <Form.Label>Nama Barang</Form.Label>
        <Form.Control
          type="text"
          name="nama"
          placeholder="Nama Barang"
          value={nama}
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Deskripsi Barang</Form.Label>
        <Form.Control
          as="textarea"
          name="deskripsi"
          rows={3}
          placeholder="Deskripsi Barang"
          value={deskripsi}
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicHarga">
        <Form.Label>Harga</Form.Label>
        <Form.Control
          type="text"
          name="harga"
          placeholder="Harga"
          value={harga}
          onChange={(event) => handleChange(event)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormData;
