import React from 'react';

class DownloadButton extends React.Component {
  downloadFile = () => {
    // Logique pour télécharger le fichier CV
    const downloadLink = document.createElement('a');
    downloadLink.href = 'assets/cv.pdf'; // Mettez le chemin vers votre CV ici
    downloadLink.download = 'cv-kai.pdf'; // Nom du fichier à télécharger
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  render() {
    return (
      <button onClick={this.downloadFile}>
        Download CV
      </button>
    );
  }
}

export default DownloadButton;
