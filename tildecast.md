# TildeCast Specification Proposal

 - handle streamers
     - username and password, hooked into liquidsoap and broadcasted into icecast
     - admin accounts can add/remove streamers (should they be in the same set as streamer accounts? or should they be separate from streamer accounts)
 - handle scheduling
     - streamers can have slots assigned to them by admin accounts
       - maybe there can be a request form in a streamer login page to request added slots/modified slots/removed slots, which would feed into the admin being able to approve/deny these changes?
       - in any case it's the admin who has the final say
     - slots have a name and UID
       - contrast AzuraCast, where slots have an id based on the streamer and that's it
       - would allow for easy slot deduping in iCal maker
         - should the schedule backend be responsible for creating the iCal file? then the current PHP iCal maker can be retired and it can just forward out the backend's iCal
    - a timeslot's recurrence is defined by an iCal RRULE
      - this allows for more complicated timeslot recurrence
      - contrast AzuraCast, where timeslots are seemingly only weekly
    - DJs can be restricted to only be allowed to stream during their slots
      - we don't currently have an issue with DJs stealing each other's slots but if we did, being able to turn this on would help a ton
      - this isn't a priority feature since we aren't using it right now, but having the option (and being able to toggle it from within the control panel) would be neat