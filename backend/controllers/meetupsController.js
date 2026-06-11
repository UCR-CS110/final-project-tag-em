import pool from "../config/db.js";

export async function getMeetups(req, res) {
  try {
    const result = await pool.query("SELECT * FROM meetups ORDER BY event_date ASC");

    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Failed to get meetups" });
  }
}

export async function getMeetupById(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM meetups WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meetup not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to get meetup" });
  }
}

export async function createMeetup(req, res) {
  const {
    event_name,
    event_location,
    event_date,
    event_bio,
    event_creator,
  } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO meetups 
        (event_name, event_location, event_date, event_bio, event_creator)
       VALUES 
        ($1, $2, $3, $4, $5)
       RETURNING *`,
      [event_name, event_location, event_date, event_bio, event_creator]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to create meetup" });
  }
}

export async function updateMeetup(req, res) {
  const { id } = req.params;

  const {
    event_name,
    event_location,
    event_date,
    event_bio,
    event_creator,
  } = req.body;

  try {
    const result = await pool.query(
      `UPDATE meetups
       SET 
        event_name = $1,
        event_location = $2,
        event_date = $3,
        event_bio = $4,
        event_creator = $5
       WHERE id = $6
       RETURNING *`,
      [event_name, event_location, event_date, event_bio, event_creator, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meetup not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update meetup" });
  }
}

export async function deleteMeetup(req, res) {
  const { id } = req.params;

  try {
    const result = await pool.query(
      "DELETE FROM meetups WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meetup not found" });
    }

    res.status(200).json({ message: "Meetup deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete meetup" });
  }
}