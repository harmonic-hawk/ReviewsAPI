CREATE USER 'root'@'172.56.38.45' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD on *.* TO 'root'@'172.56.38.45' WITH GRANT OPTION;

-- 1) either execute this file by running

CREATE USER 'root'@'ip70-187-174-165.oc.oc.cox.net' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT CREATE, ALTER, DROP, INSERT, UPDATE, DELETE, SELECT, REFERENCES, RELOAD ON *.* TO 'root'@'ip70-187-174-165.oc.oc.cox.net' WITH GRANT OPTION