<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wintertide' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ';U]s4eLs|A;rYQ:^`VW^-mo6&Vbg[y)I<ign9m5Jt<[{e#fzq8@l52XalR^q*-_j' );
define( 'SECURE_AUTH_KEY',  'ZKg>X$s;%QO2.*Yz6b+56G:$TArSlI!=,1/B=xW8b1B?8/bJ8}e,`pFf$-oMJn7{' );
define( 'LOGGED_IN_KEY',    'D1F(@ppO2i+a22hWKe* }@A~|`n_OSpk?JG.3/}z<=0zkeQ)ctpd]Oy{o9)+b?Cj' );
define( 'NONCE_KEY',        ':ejtu:m])GD6&/vmTHcqGDM ^C[jB]e5hJ}qq1O8.L]x<WUdv N}hNEbb/}]c<_u' );
define( 'AUTH_SALT',        ',nOAh*dYqc3lV9y9W*j:98aNwOHv2kKc20 Hk{p8}:ZM<V|nax~g}!xR*Y)}MP-F' );
define( 'SECURE_AUTH_SALT', '[M&Hx<!=h8_N4E~~Lk)r*itt>g3EutA:97 dvuw`7WLbmev|KRg2kyZ_?YP7WC*p' );
define( 'LOGGED_IN_SALT',   'H)LCzU}kZ5Dv]1Zfcq0z[CUNJTYB^0,bG#zfTf^[>||/Us<g5zx!W]/^o&;Aqsi$' );
define( 'NONCE_SALT',       '->?(oAQ;h8>FN 2SG5nxQK}|L5{[0H%Pwb=B`W_x8%,Y|OpNvogf%1N}DVNyiL3Y' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
