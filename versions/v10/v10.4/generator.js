var BingoLibrary;
(() => {
  "use strict";
  var e = {
      785: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.BingoBoard = void 0);
        const o = r(809),
          n = r(754);
        t.BingoBoard = class {
          constructor(e, t) {
            (this._squares = e.map((e) => {
              if (!(0, o.hasGoal)(e))
                throw Error(
                  "Every square needs to have a goal to create a BingoBoard"
                );
              return e;
            })),
              (this._iterations = t);
          }
          get iterations() {
            return this._iterations;
          }
          get squares() {
            return this._squares;
          }
          get goals() {
            return this._squares.map((e) => e.goal);
          }
          get goalNames() {
            return this.goals.map((e) => e.name);
          }
          getRow(e) {
            return n.INDICES_PER_ROW[e].map((e) => this._squares[e]);
          }
        };
      },
      754: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ROWS_PER_INDEX =
            t.INDICES_PER_ROW =
            t.SQUARE_POSITIONS =
            t.SQUARES_PER_ROW =
              void 0),
          (t.SQUARES_PER_ROW = 5),
          (t.SQUARE_POSITIONS = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23, 24,
          ]),
          (t.INDICES_PER_ROW = {
            row1: [0, 1, 2, 3, 4],
            row2: [5, 6, 7, 8, 9],
            row3: [10, 11, 12, 13, 14],
            row4: [15, 16, 17, 18, 19],
            row5: [20, 21, 22, 23, 24],
            col1: [0, 5, 10, 15, 20],
            col2: [1, 6, 11, 16, 21],
            col3: [2, 7, 12, 17, 22],
            col4: [3, 8, 13, 18, 23],
            col5: [4, 9, 14, 19, 24],
            tlbr: [0, 6, 12, 18, 24],
            bltr: [4, 8, 12, 16, 20],
          }),
          (t.ROWS_PER_INDEX = {
            0: ["row1", "col1", "tlbr"],
            1: ["row1", "col2"],
            2: ["row1", "col3"],
            3: ["row1", "col4"],
            4: ["row1", "col5", "bltr"],
            5: ["row2", "col1"],
            6: ["row2", "col2", "tlbr"],
            7: ["row2", "col3"],
            8: ["row2", "col4", "bltr"],
            9: ["row2", "col5"],
            10: ["row3", "col1"],
            11: ["row3", "col2"],
            12: ["row3", "col3", "tlbr", "bltr"],
            13: ["row3", "col4"],
            14: ["row3", "col5"],
            15: ["row4", "col1"],
            16: ["row4", "col2", "bltr"],
            17: ["row4", "col3"],
            18: ["row4", "col4", "tlbr"],
            19: ["row4", "col5"],
            20: ["row5", "col1", "bltr"],
            21: ["row5", "col2"],
            22: ["row5", "col3"],
            23: ["row5", "col4"],
            24: ["row5", "col5", "tlbr"],
          });
      },
      685: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.DEFAULT_PROFILES = void 0);
        const r = {
          minimumSynergy: -3,
          maximumSynergy: 7,
          maximumIndividualSynergy: 3.75,
          initialOffset: 1,
          maximumOffset: 2,
          baselineTime: 24.75,
          timePerDifficulty: 0.75,
          tooMuchSynergy: 100,
          useFrequencyBalancing: !0,
        };
        t.DEFAULT_PROFILES = {
          normal: r,
          blackout: Object.assign(Object.assign({}, r), {
            minimumSynergy: -10,
            maximumSynergy: 10,
            maximumIndividualSynergy: 4.5,
            initialOffset: 2,
            maximumOffset: 6,
          }),
          short: Object.assign(Object.assign({}, r), {
            maximumSynergy: 3,
            baselineTime: 12,
            timePerDifficulty: 0.5,
          }),
          shortBlackout: Object.assign(Object.assign({}, r), {
            minimumSynergy: -4,
            maximumSynergy: 4,
            initialOffset: 2,
            maximumOffset: 6,
            baselineTime: 12,
            timePerDifficulty: 0.5,
          }),
        };
      },
      236: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 });
        const o = r(809),
          n = r(350),
          i = r(644),
          s = r(882),
          a = r(785),
          l = r(531),
          c = r(754);
        t.default = class {
          constructor(e, t, r) {
            (this.isBlackout = "blackout" === t || "shortBlackout" === t),
              (this.profile = r),
              (this.allGoals = (0, s.flattenGoalList)(e)),
              (this.synergyCalculator = new i.SynergyCalculator(
                r,
                e.rowtypes,
                (0, s.parseSynergyFilters)(e.synfilters)
              )),
              (this.board = new l.PotentialBingoBoard(0, r)),
              (this.rng = new n.RNG(0));
          }
          generateBoard(e, t = 100) {
            let r;
            this.rng = new n.RNG(e);
            let o = 0;
            for (; !r && o < t; ) o++, (r = this.generate(e));
            if (r) return new a.BingoBoard(r.squares, o);
            console.error(
              `Failed to generate board after ${o} iterations (seed: ${e})`
            );
          }
          generate(e) {
            this.board = new l.PotentialBingoBoard(e, this.profile);
            const t = this.generatePopulationOrder();
            for (const e of c.SQUARE_POSITIONS) {
              const r = t[e],
                o = this.pickGoalForPosition(r);
              if (!o) return;
              this.board.squares[r].goal = o;
            }
            return this.board;
          }
          pickGoalForPosition(e) {
            const t = this.board.squares[e],
              r = t.desiredTime;
            for (
              let o = this.profile.initialOffset;
              o <= this.profile.maximumOffset;
              o++
            ) {
              const n = this.getShuffledGoalsInTimeRange(r - o, r + o);
              for (const r of n) {
                if (this.board.hasGoal(r)) continue;
                const o = Object.assign(Object.assign({}, t), { goal: r });
                if (
                  !(
                    (this.isBlackout && this.hasConflictsOnBoard(o)) ||
                    this.causesTooMuchSynergyInRow(o, e)
                  )
                )
                  return r;
              }
            }
          }
          getShuffledGoalsInTimeRange(e, t) {
            const r = this.allGoals.filter((r) => r.time >= e && r.time <= t);
            return this.profile.useFrequencyBalancing
              ? this.weightedShuffle(r)
              : this.shuffle(r);
          }
          hasConflictsOnBoard(e) {
            for (const t of this.board.squares)
              if (
                (0, o.hasGoal)(t) &&
                this.synergyCalculator.calculateSynergyOfSquares([e, t]) >=
                  this.profile.tooMuchSynergy
              )
                return !0;
            return !1;
          }
          causesTooMuchSynergyInRow(e, t) {
            const r = this.minMaxSynergiesForRowsOfSquare(e, t);
            return (
              r.maximumSynergy > this.profile.maximumSynergy ||
              r.minimumSynergy < this.profile.minimumSynergy
            );
          }
          minMaxSynergiesForRowsOfSquare(e, t) {
            const r = c.ROWS_PER_INDEX[t];
            let o = 0,
              n = this.profile.tooMuchSynergy;
            for (const i of r) {
              const r = this.board.getOtherSquaresInRow(t, i);
              r.push(e);
              const s = this.synergyCalculator.calculateSynergyOfSquares(r);
              (o = Math.max(o, s)), (n = Math.min(n, s));
            }
            return { maximumSynergy: o, minimumSynergy: n };
          }
          generatePopulationOrder() {
            let e = [];
            e[0] = 12;
            const t = this.shuffle([0, 6, 18, 24, 4, 8, 16, 20]);
            e = e.concat(t);
            const r = this.shuffle([
              1, 2, 3, 5, 7, 9, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23,
            ]);
            return (
              (e = e.concat(r)),
              this.movePositionsWithHighestDifficultyToFront(3, e),
              e
            );
          }
          movePositionsWithHighestDifficultyToFront(e, t) {
            e > this.board.squares.length && (e = this.board.squares.length);
            const r = this.board.squares.map((e) => e.difficulty),
              o = (0, s.sortAscending)((0, s.sortDescending)(r).slice(0, e));
            for (const e of o) this.movePositionWithDifficultyToFront(e, t);
          }
          movePositionWithDifficultyToFront(e, t) {
            const r = this.board.squares.findIndex((t) => t.difficulty == e);
            if (-1 === r)
              throw new Error(`Can't find square with difficulty ${e}`);
            t.splice(
              t.findIndex((e) => e === r),
              1
            ),
              t.splice(0, 0, r);
          }
          shuffle(e) {
            const t = e.slice();
            for (let e = 0; e < t.length; e++) {
              const r = Math.floor(this.rng.nextRandom() * (e + 1)),
                o = t[e];
              (t[e] = t[r]), (t[r] = o);
            }
            return t;
          }
          weightedShuffle(e) {
            return e
              .map((e) => {
                var t;
                return {
                  goal: e,
                  sortVal:
                    (null !== (t = e.weight) && void 0 !== t ? t : 0) +
                    this.rng.nextRandom() +
                    this.rng.nextRandom() +
                    this.rng.nextRandom() +
                    this.rng.nextRandom() -
                    2,
                };
              })
              .sort(({ sortVal: e }, { sortVal: t }) => t - e)
              .map(({ goal: e }) => e);
          }
        };
      },
      607: function (e, t, r) {
        var o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateBingoBoard =
            t.bingoGenerator =
            t.ootBingoGenerator =
              void 0);
        const n = o(r(236)),
          i = r(882),
          s = r(685);
        function a(e, t) {
          const r = (0, i.extractGoalList)(e, t.mode);
          if (!r) return;
          const o = s.DEFAULT_PROFILES[t.mode],
            a = new n.default(r, t.mode, o).generateBoard(t.seed);
          if (!a) return;
          const l = [];
          return (
            a.goals.forEach((e, t) => (l[t + 1] = e)),
            (l.meta = { iterations: a.iterations }),
            l
          );
        }
        (t.ootBingoGenerator = a),
          (t.bingoGenerator = function (e, t) {
            return a(e, t);
          }),
          (t.generateBingoBoard = function (e, t, r, o) {
            const a = (0, i.extractGoalList)(e, t);
            if (a)
              return new n.default(
                a,
                t,
                null != o ? o : s.DEFAULT_PROFILES[t]
              ).generateBoard(r);
          });
      },
      992: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.generateMagicSquare = void 0);
        const o = r(754);
        t.generateMagicSquare = function (e) {
          return o.SQUARE_POSITIONS.map((t) =>
            (function (e, t) {
              let r = t % 1e3,
                o = r % 8,
                n = Math.floor(o / 2),
                i = o % 2,
                s = r % 5,
                a = r % 3,
                l = Math.floor(r / 120);
              const c = [0];
              c.splice(i, 0, 1),
                c.splice(a, 0, 2),
                c.splice(n, 0, 3),
                c.splice(s, 0, 4),
                (r = Math.floor(t / 1e3)),
                (r %= 1e3),
                (o = r % 8),
                (n = Math.floor(o / 2)),
                (i = o % 2),
                (s = r % 5),
                (a = r % 3),
                (l = 8 * l + Math.floor(r / 120));
              const u = [0];
              u.splice(i, 0, 1),
                u.splice(a, 0, 2),
                u.splice(n, 0, 3),
                u.splice(s, 0, 4),
                (l %= 5);
              const f = (e + l) % 5,
                g = Math.floor(e / 5);
              return 5 * c[(f + 3 * g) % 5] + u[(3 * f + g) % 5] + 1;
            })(t, e)
          );
        };
      },
      531: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.PotentialBingoBoard = void 0);
        const o = r(992),
          n = r(754);
        t.PotentialBingoBoard = class {
          constructor(e, t) {
            const r = (0, o.generateMagicSquare)(e);
            this._squares = n.SQUARE_POSITIONS.map((e) => {
              const o = r[e];
              return { difficulty: o, desiredTime: o * t.timePerDifficulty };
            });
          }
          get squares() {
            return this._squares;
          }
          getOtherSquaresInRow(e, t) {
            return n.INDICES_PER_ROW[t]
              .filter((t) => t != e)
              .map((e) => this._squares[e]);
          }
          hasGoal(e) {
            return this._squares.some((t) => t.goal && t.goal.id === e.id);
          }
        };
      },
      350: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.RNG = void 0);
        const o = r(709);
        t.RNG = class {
          constructor(e) {
            (0, o.seedrandom)(), Math.seedrandom(e.toString());
          }
          nextRandom() {
            return Math.random();
          }
        };
      },
      644: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.SynergyCalculator = void 0);
        const o = r(809),
          n = r(882),
          i = r(754);
        t.SynergyCalculator = class {
          constructor(e, t, r) {
            (this.profile = e),
              (this.rowtypeTimeSave = t),
              (this.synergyFilters = r);
          }
          calculateSynergyOfSquares(e) {
            const t = e.filter(o.hasGoal);
            if (this.containsDuplicateGoals(t))
              return this.profile.tooMuchSynergy;
            const r = this.mergeSynergiesOfSquares(t, "types"),
              n = this.mergeSynergiesOfSquares(t, "subtypes"),
              i = this.unifyTypeSynergies(r, n),
              s = this.mergeSynergiesOfSquares(t, "rowtypes"),
              a = this.filterTypeSynergies(i),
              l = this.filterRowtypeSynergies(s),
              c = t.map((e) => e.desiredTime - e.goal.time);
            return this.calculateTotalSynergy(a, l, c);
          }
          containsDuplicateGoals(e) {
            const t = e.filter(o.hasGoal).map((e) => e.goal.id);
            return new Set(t).size !== t.length;
          }
          mergeSynergiesOfSquares(e, t) {
            const r = {};
            for (const o of e)
              for (const e in o.goal[t])
                r[e] || (r[e] = []), r[e].push(o.goal[t][e]);
            return r;
          }
          unifyTypeSynergies(e, t) {
            const r = {};
            for (const o in e) r[o] = o in t ? e[o].concat(t[o]) : e[o];
            return r;
          }
          filterTypeSynergies(e) {
            const t = {};
            for (const r in e) {
              const o = e[r],
                n = this.filterForTypeCategory(r, o);
              n.length > 0 && (t[r] = n);
            }
            return t;
          }
          filterForTypeCategory(e, t) {
            if (!(e in this.synergyFilters))
              return (0, n.removeHighestNumber)(t);
            const r = this.synergyFilters[e];
            return (
              "min" === r.filterType
                ? (0, n.sortAscending)(t)
                : (0, n.sortDescending)(t)
            ).slice(0, r.filterValue);
          }
          filterRowtypeSynergies(e) {
            const t = {};
            for (const r in e) {
              const o = e[r];
              if (o.length < i.SQUARES_PER_ROW) return t;
              const n = this.filterForRowtypeCategory(r, o);
              void 0 !== n && (t[r] = n);
            }
            return t;
          }
          filterForRowtypeCategory(e, t) {
            let r = 0;
            for (const e of t) r += e;
            const o = this.rowtypeTimeSave[e];
            return o > 0 && o > r ? o - r : o < 0 && o > r ? r - o : void 0;
          }
          calculateTotalSynergy(e, t, r) {
            let o = 0;
            return (
              (o += this.calculateTotalTypeSynergy(e)),
              o >= this.profile.tooMuchSynergy
                ? this.profile.tooMuchSynergy
                : ((o += this.calculateTotalRowtypeSynergy(t)),
                  (o += this.calculateTotalTimeDifference(r)),
                  o)
            );
          }
          calculateTotalTypeSynergy(e) {
            let t = 0;
            for (const r in e) {
              const o = e[r];
              for (const e of o) {
                if (e > this.profile.maximumIndividualSynergy)
                  return this.profile.tooMuchSynergy;
                t += e;
              }
            }
            return t;
          }
          calculateTotalRowtypeSynergy(e) {
            let t = 0;
            for (const r in e) t += e[r];
            return t;
          }
          calculateTotalTimeDifference(e) {
            let t = 0;
            for (const r of e) t += r;
            return t;
          }
        };
      },
      809: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.hasGoal = void 0),
          (t.hasGoal = function (e) {
            return void 0 !== e.goal;
          });
      },
      428: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.isCombinedGoalList = void 0),
          (t.isCombinedGoalList = function (e) {
            return "true" === e.info.combined;
          });
      },
      882: (e, t, r) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.sortDescending =
            t.sortAscending =
            t.removeHighestNumber =
            t.extractGoalList =
            t.parseSynergyFilters =
            t.flattenGoalList =
            t.sortByTimeAndId =
              void 0);
        const o = r(428);
        function n(e, t) {
          const r = e.time - t.time;
          return 0 !== r ? r : e.id > t.id ? 1 : e.id < t.id ? -1 : 0;
        }
        function i(e) {
          const t = e.split(" ")[0];
          switch (null == t ? void 0 : t.toLowerCase()) {
            case "min":
              return "min";
            case "max":
              return "max";
            default:
              return;
          }
        }
        function s(e) {
          const t = e.split(" ")[1],
            r = parseInt(t, 10);
          if (!isNaN(r)) return r;
        }
        function a(e) {
          return [...e].sort((e, t) => e - t);
        }
        (t.sortByTimeAndId = n),
          (t.flattenGoalList = function (e) {
            let t = [];
            for (let r = 1; r <= 25; r++) t = t.concat(e[r]);
            return t.sort(n), t;
          }),
          (t.parseSynergyFilters = function (e) {
            const t = {};
            for (const r in e) {
              const o = e[r],
                n = i(o),
                a = s(o);
              void 0 !== n &&
                void 0 !== a &&
                (t[r] = { filterType: n, filterValue: a });
            }
            return t;
          }),
          (t.extractGoalList = function (e, t) {
            if ((0, o.isCombinedGoalList)(e)) {
              if (("normal" === t || "short" === t) && t in e) return e[t];
              if ("shortBlackout" === t && e.short) return e.short;
              if (e.normal) return e.normal;
              throw Error(
                `Goal list doesn't contain a valid sub goal list for mode: "${t}"`
              );
            }
          }),
          (t.removeHighestNumber = function (e) {
            return a(e).slice(0, -1);
          }),
          (t.sortAscending = a),
          (t.sortDescending = function (e) {
            return [...e].slice(0).sort((e, t) => t - e);
          });
      },
      709: (e, t, r) => {
        r.r(t), r.d(t, { seedrandom: () => o });
        const o = () =>
          (function (e, t, r, o, n, i, s) {
            function a(e) {
              var t,
                o,
                n = this,
                i = e.length,
                s = 0,
                a = (n.i = n.j = n.m = 0);
              for (n.S = [], n.c = [], i || (e = [i++]); s < r; ) n.S[s] = s++;
              for (s = 0; s < r; s++)
                (a = (a + (t = n.S[s]) + e[s % i]) & 255),
                  (o = n.S[a]),
                  (n.S[s] = o),
                  (n.S[a] = t);
              (n.g = function (e) {
                var t = n.S,
                  o = (n.i + 1) & 255,
                  i = t[o],
                  s = (n.j + i) & 255,
                  a = t[s];
                (t[o] = a), (t[s] = i);
                for (var l = t[(i + a) & 255]; --e; )
                  (a = t[(s = (s + (i = t[(o = (o + 1) & 255)])) & 255)]),
                    (t[o] = a),
                    (t[s] = i),
                    (l = l * r + t[(i + a) & 255]);
                return (n.i = o), (n.j = s), l;
              }),
                n.g(r);
            }
            function l(e, t, r, o, n) {
              if (((r = []), (n = typeof e), t && "object" == n))
                for (o in e)
                  if (o.indexOf("S") < 5)
                    try {
                      r.push(l(e[o], t - 1));
                    } catch (e) {}
              return r.length ? r : e + ("string" != n ? "\0" : "");
            }
            function c(e, t, r, o) {
              for (e += "", o = r = 0; o < e.length; o++) {
                var n = t,
                  i = 255 & o,
                  s = (r ^= 19 * t[255 & o]) + e.charCodeAt(o);
                n[i] = 255 & s;
              }
              for (o in ((e = ""), t)) e += String.fromCharCode(t[o]);
              return e;
            }
            (t.seedrandom = function (o, u) {
              var f,
                g = [];
              return (
                (o = c(
                  l(
                    u
                      ? [o, e]
                      : arguments.length
                      ? o
                      : [new Date().getTime(), e, window],
                    3
                  ),
                  g
                )),
                c((f = new a(g)).S, e),
                (t.random = function () {
                  for (var e = f.g(6), t = s, o = 0; e < n; )
                    (e = (e + o) * r), (t *= r), (o = f.g(1));
                  for (; e >= i; ) (e /= 2), (t /= 2), (o >>>= 1);
                  return (e + o) / t;
                }),
                o
              );
            }),
              (s = t.pow(r, 6)),
              (n = t.pow(2, n)),
              (i = 2 * n),
              c(t.random(), e);
          })([], Math, 256, 0, 52);
      },
    },
    t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var i = (t[o] = { exports: {} });
    return e[o].call(i.exports, i, i.exports, r), i.exports;
  }
  (r.d = (e, t) => {
    for (var o in t)
      r.o(t, o) &&
        !r.o(e, o) &&
        Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
  }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  var o = r(607);
  BingoLibrary = o;
})();
