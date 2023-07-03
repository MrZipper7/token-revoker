const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/

const truncateEthAddress = (address) => {


    const match = address.match(truncateRegex);
    const value = !match ? address : `${match[1]}…${match[2]}`;
    return value
  };

export { truncateEthAddress };
