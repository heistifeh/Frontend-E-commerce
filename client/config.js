const checkConfig = (server) => {
    let config = {};
    switch (server) {
      case "production":
        config = {
          baseUrl: "http://localhost:8000",
        };
        break;
      case "local":
        config = {
          baseUrl: "http://localhost:8000",
        };
        break;
      default:
        console.warn(`Unknown server: ${server}`);
        break;
    }
    return config;
  };
  
  export const selectServer = "production";
  export const config = checkConfig(selectServer);
  
  // Optional: Throw error if config is empty to avoid silent failure
  if (Object.keys(config).length === 0) {
    throw new Error("Configuration for the selected server is not defined.");
  }
  