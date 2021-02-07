import React, { Component } from "react";

export default class IPFSUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      error: "",
      upload: "",
    };
  }

  submit = async () => {
    const { ipfs } = this.props;
    try {
      const upload = await ipfs.add(this.state.selectedFile);
      this.setState({ upload: upload.path });
    } catch (error) {
      console.log(error);
      this.setState({ error: "An error occurred, please try again." });
    }
  };
  render() {
    const { allowedTypes } = this.props;
    return (
      <div>
        {this.state.error}
        {this.state.upload}
        <input
          accept={allowedTypes}
          type="file"
          onChange={(e) => this.setState({ selectedFile: e.target.files[0] })}
        />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
