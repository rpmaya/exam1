const uploadJSON = async (content) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

  const headers = {
      'Content-Type': 'application/json',
      pinata_api_key: pinataApiKey,
      pinata_secret_api_key: pinataSecretApiKey,
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(content),
      });

      if (!response.ok) {
          throw new Error('Error al subir a JSON a Pinata');
      }

      const data = await response.json();
      return data.IpfsHash;
  } catch (error) {
      console.error('Error al subir archivo a Pinata:', error);
  }
}    

module.exports = { uploadJSON }