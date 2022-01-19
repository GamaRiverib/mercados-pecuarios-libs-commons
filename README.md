# Mercados Pecuarios Commons Lib

Biblioteca de clases comunes para el código en JavaScript/TypeScript de los componentes de la solución del Sitio Web Mercados Pecuarios.


## Environment Variables

 * LOGGER_PREFIX: prefijo o nombre por defecto que se le asigna al logger.
 * LOGGER_LEVEL: nivel a partir del cual se harán los registros en bitácora. "silly" -> "input" -> "verbose" -> "prompt" -> "debug" -> "info" -> "data" -> "help" -> "warn" -> "error".
 * ENABLE_CLOUD_LOGGING: habilita el registro en bitácora en la nube (Google Cloud Logging).
 * DEFAULT_ERROR_CODE: código de error por defecto.
 * DEFAULT_ERROR_MESSAGE: mensaje de error por defecto.
 * AUTHORIZATION_HEADER_INFO: permite especificar el header en el cual se encuentra el JWT del usuario en sesión.