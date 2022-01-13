const Logger = require('logplease');
// Creia que tenia que importar otro paquete pero Logger tiene el suyo propio de colores
// Cambiar Colors.White por Logger.Colors.Yellow
const Colors = require('colors'); // Esto no hace nada

const options = {
    useColors: true,     // Enable colors
    color: Logger.Colors.Yellow, // Set the color of the logger
    showTimestamp: true, // Display timestamp in the log message
    useLocalTime: false, // Display timestamp in local timezone
    showLevel: true,     // Display log level in the log message
    filename: null,      // Set file path to log to a file
    appendFile: true,    // Append logfile instead of overwriting
  };

const logger = Logger.create('My log', options);

logger.debug(`Hola Mundo de Node`);
logger.info(`Noticias de última hora, Node.js me encanta!!`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no está bien!!!`);
