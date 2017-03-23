/**
 * @property FLIGHT_MODES
 * @type {Object}
 * @final
 */
export const FLIGHT_MODES = {
    // - 'apron' is the initial status of a new departing plane. After
    //   the plane is issued the 'taxi' command, the plane transitions to
    //   'taxi' mode
    // - 'taxi' describes the process of getting ready for takeoff. After
    //   a delay, the plane becomes ready and transitions into 'waiting' mode
    // - 'waiting': the plane is ready for takeoff and awaits clearence to
    //   take off
    // - 'takeoff' is assigned to planes in the process of taking off. These
    //   planes are still on the ground or have not yet reached the minimum
    //   altitude
    // - 'cruse' describes, that a plane is currently in flight and
    //   not following an ILS path. Planes of category 'arrival' entering the
    //   playing field also have this state. If an ILS path is picked up, the
    //   plane transitions to 'landing'
    // - 'landing' the plane is following an ILS path or is on the runway in
    //   the process of stopping. If an ILS approach or a landing is aborted,
    //   the plane reenters 'cruise' mode
    APRON: 'APRON',
    TAXI: 'TAXI',
    WAITING: 'WAITING',
    TAKEOFF: 'TAKEOFF',
    CRUISE: 'CRUISE',
    LANDING: 'LANDING'
};

/**
 * @property FLIGHT_CATEGORY
 * @type {Object}
 * @final
 */
export const FLIGHT_CATEGORY = {
    ARRIVAL: 'arrival',
    DEPARTURE: 'departure'
};

/**
 * Enumeration for the phases of flight
 *
 * @property FLIGHT_PHASE
 * @type {object}
 * @final
 */
export const FLIGHT_PHASE = {
    APRON: 'APRON',
    TAXI: 'TAXI',
    WAITING: 'WAITING',
    TAKEOFF: 'TAKEOFF',
    CLIMB: 'CLIMB',
    CRUISE: 'CRUISE',
    HOLD: 'HOLD',
    DESCENT: 'DESCENT',
    APPROACH: 'APPROACH',
    LANDING: 'LANDING'
};

/**
 * @property WAYPOINT_NAV_MODE
 * @type {Object}
 * @final
 */
export const WAYPOINT_NAV_MODE = {
    FIX: 'fix',
    HEADING: 'heading',
    HOLD: 'hold',
    RWY: 'rwy'
};

/**
 * Enumeration of possible FLight Plan Leg types.
 *
 * @property FP_LEG_TYPE
 * @type {Object}
 * @final
 */
export const FP_LEG_TYPE = {
    SID: 'sid',
    STAR: 'star',
    IAP: 'iap',
    AWY: 'awy',
    FIX: 'fix',
    MANUAL: '[manual]'
};

export const PROCEDURE_TYPE = {
    SID: 'SID',
    STAR: 'STAR'
};

/**
 * Enumerations for various performance constants
 *
 * @property PERFORMANCE
 * @type {Object}
 * @final
 */
export const PERFORMANCE = {
    /**
    * Maximum distance from the current waypoint to allow us to proceed to the next waypoint
    * due to a tight turn, without requiring us to continue toward the current waypoint.
    *
    * @property MAXIMUM_DISTANCE_TO_FLY_BY_WAYPOINT_NM
    * @type {number}
    * @final
    */
    MAXIMUM_DISTANCE_TO_FLY_BY_WAYPOINT_NM: 5,

    /**
     * Maximum distance from the current waypoint to consider it to have been passed over,
     * allowing us to proceed to the next fix.
     *
     * @property MAXIMUM_DISTANCE_TO_PASS_WAYPOINT_NM
     * @type {number}
     * @final
     */
    MAXIMUM_DISTANCE_TO_PASS_WAYPOINT_NM: 0.5,

    /**
     * Maximum lateral offset from the approach course to consider the aircraft close enough
     * to be "established on the approach course", which is an important condition for applying
     * rules of separation.
     *
     * @property MAXIMUM_DISTANCE_CONSIDERED_ESTABLISHED_ON_APPROACH_COURSE_NM
     * @type {number}
     * @final
     */
    MAXIMUM_DISTANCE_CONSIDERED_ESTABLISHED_ON_APPROACH_COURSE_NM: 0.0246868,   // appx. 150 feet

    /**
     * Maximum angular differce from the approach course heading to consider the aircraft close
     * to be "established on the approach course", which is an important condition for applying
     * rules of separation.
     *
     * @property MAXIMUM_ANGLE_CONSIDERED_ESTABLISHED_ON_APPROACH_COURSE
     * @type {number}
     * @final
     */
    MAXIMUM_ANGLE_CONSIDERED_ESTABLISHED_ON_APPROACH_COURSE: 0.0174533, // appx. 1 degree

    /**
     * Altitude above the runway to which aircraft may descend on an instrument approach.
     * Note: Below this altitude, the aircraft is in landing mode
     *
     * @property INSTRUMENT_APPROACH_MINIMUM_DESCENT_ALTITUDE
     * @type {number}
     * @final
     */
    INSTRUMENT_APPROACH_MINIMUM_DESCENT_ALTITUDE: 200,

    /**
     * Altitude above the runway at which aircraft begin their on-course turn, in feet
     *
     * @property TAKEOFF_TURN_ALTITUDE
     * @type {number}
     * @final
     */
    TAKEOFF_TURN_ALTITUDE: 400,

    /**
     * Rate of turn, in radians per second
     *
     * @property TURN_RATE
     * @type {number}
     * @final
     */
    TURN_RATE: 0.0523598776,    // 3 degrees

    /**
     * Proportion of the maximum capable descent rate that aircraft will use by default
     *
     * @property TYPICAL_DESCENT_FACTOR
     * @type {number}
     * @final
     */
    TYPICAL_DESCENT_FACTOR: 0.7,

    /**
     * Proportion of the maximum capable climb rate that aircraft will use by default
     *
     * @property TYPICAL_CLIMB_FACTOR
     * @type {number}
     * @final
     */
    TYPICAL_CLIMB_FACTOR: 0.7
};
