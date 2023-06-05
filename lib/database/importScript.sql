LOAD DATA INFILE 'importarAirports.csv' 
INTO TABLE airports 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
Ignore 1 rows;

SELECT COUNT(*) FROM test01.airports where iata_code != 'NULL';

/* (id, ident, type, name, latitude_deg, longitude_deg, elevation_ft, continent, iso_country, iso_region, municipality, scheduled_service, gps_code, iata_code, local_code, home_link, wikipedia_link, keywords)
SET elevation_ft = NULLIF(elevation_ft, ''),
    id = NULLIF(id, ''),
    ident = NULLIF(ident, ''),
    type = NULLIF(type, ''),
    name = NULLIF(name, ''),
    latitude_deg = NULLIF(latitude_deg, ''),
    longitude_deg = NULLIF(longitude_deg, ''),
    continent = NULLIF(continent, ''),
    iso_country = NULLIF(iso_country, ''),
    iso_region = NULLIF(iso_region, ''),
    municipality = NULLIF(municipality, ''),
    scheduled_service = NULLIF(scheduled_service, ''),
    gps_code = NULLIF(gps_code, ''),
    iata_code = NULLIF(iata_code, ''),
    local_code = NULLIF(local_code, ''),
    home_link = NULLIF(home_link, ''),
    wikipedia_link = NULLIF(wikipedia_link, ''),
    keywords = NULLIF(keywords, ''); */