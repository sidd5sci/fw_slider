SELECT 
  rwtab.act_day "Date", 
  "RW users", 
  "RW Time", 
  "RO users", 
  "RO Time" ,
  rwtab.ser "ServiceID"
from 
  (
    SELECT 
      act_day, 
      max(t) "RW Time", 
      NVL(rwnumb, 0) "RW users" ,
      service_id "SER"
    FROM 
      
      /*for RW users*/
      (
              SELECT 
                b.act_day act_day, 
                TO_CHAR(b.act_date + 1 / 1440, 'HH:MI pm') t, 
                a.rwnumb ,
                a.service_id
              FROM 
                (
                        SELECT 
                          MAX(cur_number) rwnumb, 
                          act_day ,
                          service_id
                        FROM 
                          nc_access 
                        WHERE 
                          act_date > TRUNC(SYSDATE) - ( #Number of days# - 1)
                        AND NOT EXISTS (
                              select 
                                1 
                              from 
                                nc_references 
                              where 
                                reference = 7021328724013885308 start with object_id = user_id 
                                and attr_id = 33 connect by prior reference = object_id 
                                and attr_id = 33
                        ) 
                        AND service_id = #serviceID# 
                          /*where 7021328724013885308 - id of "RO Users" group, 33 - id of "group" attribute*/
                        GROUP BY act_day, service_id

                ) a,  nc_access b 
                WHERE 
                    a.act_day = b.act_day 
                AND a.rwnumb = b.cur_number

          ) 
        GROUP BY 
          act_day, 
          rwnumb ,
          service_id
        ORDER BY 
          to_date(act_day, 'dd/mm/yyyy') desc
      ) rwtab;

      
