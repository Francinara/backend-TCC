declare module "wkx" {
  export class Geometry {
    static parse(wkt: string): Geometry;
    static parseWKB(buffer: Buffer): Geometry;
    static parseTwkb(buffer: Buffer): Geometry;
    static parseGeoJSON(geoJSON: object): Geometry;

    toWKT(): string;
    toWKB(): Buffer;
    toTWKB(): Buffer;
    toGeoJSON(options?: { shortCrs?: boolean }): object;
  }

  export class Point extends Geometry {
    constructor(x: number, y: number, z?: number, m?: number);

    x: number;
    y: number;
    z?: number;
    m?: number;

    toWKT(): string;
    toWKB(): Buffer;
    toTWKB(): Buffer;
    toGeoJSON(options?: { shortCrs?: boolean }): object;
  }

  export class LineString extends Geometry {
    constructor(points: Point[]);

    points: Point[];

    toWKT(): string;
    toWKB(): Buffer;
    toTWKB(): Buffer;
    toGeoJSON(options?: { shortCrs?: boolean }): object;
  }

  export class Polygon extends Geometry {
    constructor(rings: LineString[]);

    rings: LineString[];

    toWKT(): string;
    toWKB(): Buffer;
    toTWKB(): Buffer;
    toGeoJSON(options?: { shortCrs?: boolean }): object;
  }
}
