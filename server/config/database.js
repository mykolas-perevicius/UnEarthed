import pg from 'pg';

const config = {
    connectionString: "postgresql://postgres:cteFsWkQGwePekclOcfcmnOHyUMnlfUy@autorack.proxy.rlwy.net:24764/railway",
    ssl: false // Disable SSL
};

export const pool = new pg.Pool(config);