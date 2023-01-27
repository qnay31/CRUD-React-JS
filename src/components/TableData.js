import React from "react";
import { Table } from "react-bootstrap";

const TableData = ({ barangs, editData, hapusData }) => {
  return (
    <div>
      <h3>Table Barang</h3>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Nama Barang</th>
            <th>Deskripsi</th>
            <th>Harga</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {barangs.map((barang, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{barang.nama}</td>
                <td>{barang.deskripsi}</td>
                <td>{barang.harga}</td>
                <td className="text-center">
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => editData(barang.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => hapusData(barang.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableData;
