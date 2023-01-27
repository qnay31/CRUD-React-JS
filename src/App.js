import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FormData from "./components/FormData";
import NavTop from "./components/NavTop";
import TableData from "./components/TableData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      barangs: [],
      id: "",
      nama: "",
      deskripsi: "",
      harga: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.id === "") {
      this.setState({
        barangs: [
          ...this.state.barangs,
          {
            id: this.state.barangs.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      const barangYangSelainDipilih = this.state.barangs
        .filter((barang) => barang.id !== this.state.id)
        .map((filterBarang) => {
          return filterBarang;
        });

      this.setState({
        barangs: [
          ...barangYangSelainDipilih,
          {
            id: this.state.barangs.length + 1,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    }

    this.setState({
      id: "",
      nama: "",
      deskripsi: "",
      harga: "",
    });
  };

  editData = (id) => {
    const barangYangDipilih = this.state.barangs
      .filter((barang) => barang.id === id)
      .map((filterBarang) => {
        return filterBarang;
      });

    this.setState({
      id: barangYangDipilih[0].id,
      nama: barangYangDipilih[0].nama,
      deskripsi: barangYangDipilih[0].deskripsi,
      harga: barangYangDipilih[0].harga,
    });
  };

  hapusData = (id) => {
    const barangBekas = this.state.barangs
      .filter((barang) => barang.id !== id)
      .map((filterBarang) => {
        return filterBarang;
      });

    this.setState({
      barangs: barangBekas,
    });
  };

  render() {
    return (
      <div>
        <NavTop />
        <Container className="mt-4">
          <TableData
            barangs={this.state.barangs}
            editData={this.editData}
            hapusData={this.hapusData}
          />
          <FormData
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Container>
      </div>
    );
  }
}

export default App;
