
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model County
 * 
 */
export type County = $Result.DefaultSelection<Prisma.$CountyPayload>
/**
 * Model Carrier
 * 
 */
export type Carrier = $Result.DefaultSelection<Prisma.$CarrierPayload>
/**
 * Model CarrierCounty
 * 
 */
export type CarrierCounty = $Result.DefaultSelection<Prisma.$CarrierCountyPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Counties
 * const counties = await prisma.county.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Counties
   * const counties = await prisma.county.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.county`: Exposes CRUD operations for the **County** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Counties
    * const counties = await prisma.county.findMany()
    * ```
    */
  get county(): Prisma.CountyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrier`: Exposes CRUD operations for the **Carrier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carriers
    * const carriers = await prisma.carrier.findMany()
    * ```
    */
  get carrier(): Prisma.CarrierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carrierCounty`: Exposes CRUD operations for the **CarrierCounty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CarrierCounties
    * const carrierCounties = await prisma.carrierCounty.findMany()
    * ```
    */
  get carrierCounty(): Prisma.CarrierCountyDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    County: 'County',
    Carrier: 'Carrier',
    CarrierCounty: 'CarrierCounty'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "county" | "carrier" | "carrierCounty"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      County: {
        payload: Prisma.$CountyPayload<ExtArgs>
        fields: Prisma.CountyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>
          }
          findFirst: {
            args: Prisma.CountyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>
          }
          findMany: {
            args: Prisma.CountyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>[]
          }
          create: {
            args: Prisma.CountyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>
          }
          createMany: {
            args: Prisma.CountyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>[]
          }
          delete: {
            args: Prisma.CountyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>
          }
          update: {
            args: Prisma.CountyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>
          }
          deleteMany: {
            args: Prisma.CountyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>[]
          }
          upsert: {
            args: Prisma.CountyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountyPayload>
          }
          aggregate: {
            args: Prisma.CountyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounty>
          }
          groupBy: {
            args: Prisma.CountyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountyCountArgs<ExtArgs>
            result: $Utils.Optional<CountyCountAggregateOutputType> | number
          }
        }
      }
      Carrier: {
        payload: Prisma.$CarrierPayload<ExtArgs>
        fields: Prisma.CarrierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarrierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarrierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>
          }
          findFirst: {
            args: Prisma.CarrierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarrierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>
          }
          findMany: {
            args: Prisma.CarrierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>[]
          }
          create: {
            args: Prisma.CarrierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>
          }
          createMany: {
            args: Prisma.CarrierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarrierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>[]
          }
          delete: {
            args: Prisma.CarrierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>
          }
          update: {
            args: Prisma.CarrierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>
          }
          deleteMany: {
            args: Prisma.CarrierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarrierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarrierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>[]
          }
          upsert: {
            args: Prisma.CarrierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierPayload>
          }
          aggregate: {
            args: Prisma.CarrierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrier>
          }
          groupBy: {
            args: Prisma.CarrierGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrierGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarrierCountArgs<ExtArgs>
            result: $Utils.Optional<CarrierCountAggregateOutputType> | number
          }
        }
      }
      CarrierCounty: {
        payload: Prisma.$CarrierCountyPayload<ExtArgs>
        fields: Prisma.CarrierCountyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarrierCountyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarrierCountyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>
          }
          findFirst: {
            args: Prisma.CarrierCountyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarrierCountyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>
          }
          findMany: {
            args: Prisma.CarrierCountyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>[]
          }
          create: {
            args: Prisma.CarrierCountyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>
          }
          createMany: {
            args: Prisma.CarrierCountyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarrierCountyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>[]
          }
          delete: {
            args: Prisma.CarrierCountyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>
          }
          update: {
            args: Prisma.CarrierCountyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>
          }
          deleteMany: {
            args: Prisma.CarrierCountyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarrierCountyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarrierCountyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>[]
          }
          upsert: {
            args: Prisma.CarrierCountyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarrierCountyPayload>
          }
          aggregate: {
            args: Prisma.CarrierCountyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarrierCounty>
          }
          groupBy: {
            args: Prisma.CarrierCountyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarrierCountyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarrierCountyCountArgs<ExtArgs>
            result: $Utils.Optional<CarrierCountyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    county?: CountyOmit
    carrier?: CarrierOmit
    carrierCounty?: CarrierCountyOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CountyCountOutputType
   */

  export type CountyCountOutputType = {
    carriers: number
  }

  export type CountyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carriers?: boolean | CountyCountOutputTypeCountCarriersArgs
  }

  // Custom InputTypes
  /**
   * CountyCountOutputType without action
   */
  export type CountyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountyCountOutputType
     */
    select?: CountyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountyCountOutputType without action
   */
  export type CountyCountOutputTypeCountCarriersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrierCountyWhereInput
  }


  /**
   * Count Type CarrierCountOutputType
   */

  export type CarrierCountOutputType = {
    counties: number
  }

  export type CarrierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counties?: boolean | CarrierCountOutputTypeCountCountiesArgs
  }

  // Custom InputTypes
  /**
   * CarrierCountOutputType without action
   */
  export type CarrierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCountOutputType
     */
    select?: CarrierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CarrierCountOutputType without action
   */
  export type CarrierCountOutputTypeCountCountiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrierCountyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model County
   */

  export type AggregateCounty = {
    _count: CountyCountAggregateOutputType | null
    _avg: CountyAvgAggregateOutputType | null
    _sum: CountySumAggregateOutputType | null
    _min: CountyMinAggregateOutputType | null
    _max: CountyMaxAggregateOutputType | null
  }

  export type CountyAvgAggregateOutputType = {
    id: number | null
  }

  export type CountySumAggregateOutputType = {
    id: number | null
  }

  export type CountyMinAggregateOutputType = {
    id: number | null
    name: string | null
    isBeachPlan: boolean | null
  }

  export type CountyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isBeachPlan: boolean | null
  }

  export type CountyCountAggregateOutputType = {
    id: number
    name: number
    isBeachPlan: number
    _all: number
  }


  export type CountyAvgAggregateInputType = {
    id?: true
  }

  export type CountySumAggregateInputType = {
    id?: true
  }

  export type CountyMinAggregateInputType = {
    id?: true
    name?: true
    isBeachPlan?: true
  }

  export type CountyMaxAggregateInputType = {
    id?: true
    name?: true
    isBeachPlan?: true
  }

  export type CountyCountAggregateInputType = {
    id?: true
    name?: true
    isBeachPlan?: true
    _all?: true
  }

  export type CountyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which County to aggregate.
     */
    where?: CountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counties to fetch.
     */
    orderBy?: CountyOrderByWithRelationInput | CountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Counties
    **/
    _count?: true | CountyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountyMaxAggregateInputType
  }

  export type GetCountyAggregateType<T extends CountyAggregateArgs> = {
        [P in keyof T & keyof AggregateCounty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounty[P]>
      : GetScalarType<T[P], AggregateCounty[P]>
  }




  export type CountyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountyWhereInput
    orderBy?: CountyOrderByWithAggregationInput | CountyOrderByWithAggregationInput[]
    by: CountyScalarFieldEnum[] | CountyScalarFieldEnum
    having?: CountyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountyCountAggregateInputType | true
    _avg?: CountyAvgAggregateInputType
    _sum?: CountySumAggregateInputType
    _min?: CountyMinAggregateInputType
    _max?: CountyMaxAggregateInputType
  }

  export type CountyGroupByOutputType = {
    id: number
    name: string
    isBeachPlan: boolean
    _count: CountyCountAggregateOutputType | null
    _avg: CountyAvgAggregateOutputType | null
    _sum: CountySumAggregateOutputType | null
    _min: CountyMinAggregateOutputType | null
    _max: CountyMaxAggregateOutputType | null
  }

  type GetCountyGroupByPayload<T extends CountyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountyGroupByOutputType[P]>
            : GetScalarType<T[P], CountyGroupByOutputType[P]>
        }
      >
    >


  export type CountySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isBeachPlan?: boolean
    carriers?: boolean | County$carriersArgs<ExtArgs>
    _count?: boolean | CountyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["county"]>

  export type CountySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isBeachPlan?: boolean
  }, ExtArgs["result"]["county"]>

  export type CountySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isBeachPlan?: boolean
  }, ExtArgs["result"]["county"]>

  export type CountySelectScalar = {
    id?: boolean
    name?: boolean
    isBeachPlan?: boolean
  }

  export type CountyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isBeachPlan", ExtArgs["result"]["county"]>
  export type CountyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carriers?: boolean | County$carriersArgs<ExtArgs>
    _count?: boolean | CountyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "County"
    objects: {
      carriers: Prisma.$CarrierCountyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isBeachPlan: boolean
    }, ExtArgs["result"]["county"]>
    composites: {}
  }

  type CountyGetPayload<S extends boolean | null | undefined | CountyDefaultArgs> = $Result.GetResult<Prisma.$CountyPayload, S>

  type CountyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountyCountAggregateInputType | true
    }

  export interface CountyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['County'], meta: { name: 'County' } }
    /**
     * Find zero or one County that matches the filter.
     * @param {CountyFindUniqueArgs} args - Arguments to find a County
     * @example
     * // Get one County
     * const county = await prisma.county.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountyFindUniqueArgs>(args: SelectSubset<T, CountyFindUniqueArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one County that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountyFindUniqueOrThrowArgs} args - Arguments to find a County
     * @example
     * // Get one County
     * const county = await prisma.county.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountyFindUniqueOrThrowArgs>(args: SelectSubset<T, CountyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first County that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountyFindFirstArgs} args - Arguments to find a County
     * @example
     * // Get one County
     * const county = await prisma.county.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountyFindFirstArgs>(args?: SelectSubset<T, CountyFindFirstArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first County that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountyFindFirstOrThrowArgs} args - Arguments to find a County
     * @example
     * // Get one County
     * const county = await prisma.county.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountyFindFirstOrThrowArgs>(args?: SelectSubset<T, CountyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Counties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Counties
     * const counties = await prisma.county.findMany()
     * 
     * // Get first 10 Counties
     * const counties = await prisma.county.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countyWithIdOnly = await prisma.county.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountyFindManyArgs>(args?: SelectSubset<T, CountyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a County.
     * @param {CountyCreateArgs} args - Arguments to create a County.
     * @example
     * // Create one County
     * const County = await prisma.county.create({
     *   data: {
     *     // ... data to create a County
     *   }
     * })
     * 
     */
    create<T extends CountyCreateArgs>(args: SelectSubset<T, CountyCreateArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Counties.
     * @param {CountyCreateManyArgs} args - Arguments to create many Counties.
     * @example
     * // Create many Counties
     * const county = await prisma.county.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountyCreateManyArgs>(args?: SelectSubset<T, CountyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Counties and returns the data saved in the database.
     * @param {CountyCreateManyAndReturnArgs} args - Arguments to create many Counties.
     * @example
     * // Create many Counties
     * const county = await prisma.county.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Counties and only return the `id`
     * const countyWithIdOnly = await prisma.county.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountyCreateManyAndReturnArgs>(args?: SelectSubset<T, CountyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a County.
     * @param {CountyDeleteArgs} args - Arguments to delete one County.
     * @example
     * // Delete one County
     * const County = await prisma.county.delete({
     *   where: {
     *     // ... filter to delete one County
     *   }
     * })
     * 
     */
    delete<T extends CountyDeleteArgs>(args: SelectSubset<T, CountyDeleteArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one County.
     * @param {CountyUpdateArgs} args - Arguments to update one County.
     * @example
     * // Update one County
     * const county = await prisma.county.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountyUpdateArgs>(args: SelectSubset<T, CountyUpdateArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Counties.
     * @param {CountyDeleteManyArgs} args - Arguments to filter Counties to delete.
     * @example
     * // Delete a few Counties
     * const { count } = await prisma.county.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountyDeleteManyArgs>(args?: SelectSubset<T, CountyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Counties
     * const county = await prisma.county.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountyUpdateManyArgs>(args: SelectSubset<T, CountyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counties and returns the data updated in the database.
     * @param {CountyUpdateManyAndReturnArgs} args - Arguments to update many Counties.
     * @example
     * // Update many Counties
     * const county = await prisma.county.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Counties and only return the `id`
     * const countyWithIdOnly = await prisma.county.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountyUpdateManyAndReturnArgs>(args: SelectSubset<T, CountyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one County.
     * @param {CountyUpsertArgs} args - Arguments to update or create a County.
     * @example
     * // Update or create a County
     * const county = await prisma.county.upsert({
     *   create: {
     *     // ... data to create a County
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the County we want to update
     *   }
     * })
     */
    upsert<T extends CountyUpsertArgs>(args: SelectSubset<T, CountyUpsertArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Counties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountyCountArgs} args - Arguments to filter Counties to count.
     * @example
     * // Count the number of Counties
     * const count = await prisma.county.count({
     *   where: {
     *     // ... the filter for the Counties we want to count
     *   }
     * })
    **/
    count<T extends CountyCountArgs>(
      args?: Subset<T, CountyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a County.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountyAggregateArgs>(args: Subset<T, CountyAggregateArgs>): Prisma.PrismaPromise<GetCountyAggregateType<T>>

    /**
     * Group by County.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountyGroupByArgs['orderBy'] }
        : { orderBy?: CountyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the County model
   */
  readonly fields: CountyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for County.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carriers<T extends County$carriersArgs<ExtArgs> = {}>(args?: Subset<T, County$carriersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the County model
   */
  interface CountyFieldRefs {
    readonly id: FieldRef<"County", 'Int'>
    readonly name: FieldRef<"County", 'String'>
    readonly isBeachPlan: FieldRef<"County", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * County findUnique
   */
  export type CountyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * Filter, which County to fetch.
     */
    where: CountyWhereUniqueInput
  }

  /**
   * County findUniqueOrThrow
   */
  export type CountyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * Filter, which County to fetch.
     */
    where: CountyWhereUniqueInput
  }

  /**
   * County findFirst
   */
  export type CountyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * Filter, which County to fetch.
     */
    where?: CountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counties to fetch.
     */
    orderBy?: CountyOrderByWithRelationInput | CountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counties.
     */
    cursor?: CountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counties.
     */
    distinct?: CountyScalarFieldEnum | CountyScalarFieldEnum[]
  }

  /**
   * County findFirstOrThrow
   */
  export type CountyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * Filter, which County to fetch.
     */
    where?: CountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counties to fetch.
     */
    orderBy?: CountyOrderByWithRelationInput | CountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counties.
     */
    cursor?: CountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counties.
     */
    distinct?: CountyScalarFieldEnum | CountyScalarFieldEnum[]
  }

  /**
   * County findMany
   */
  export type CountyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * Filter, which Counties to fetch.
     */
    where?: CountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counties to fetch.
     */
    orderBy?: CountyOrderByWithRelationInput | CountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Counties.
     */
    cursor?: CountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counties.
     */
    distinct?: CountyScalarFieldEnum | CountyScalarFieldEnum[]
  }

  /**
   * County create
   */
  export type CountyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * The data needed to create a County.
     */
    data: XOR<CountyCreateInput, CountyUncheckedCreateInput>
  }

  /**
   * County createMany
   */
  export type CountyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Counties.
     */
    data: CountyCreateManyInput | CountyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * County createManyAndReturn
   */
  export type CountyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * The data used to create many Counties.
     */
    data: CountyCreateManyInput | CountyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * County update
   */
  export type CountyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * The data needed to update a County.
     */
    data: XOR<CountyUpdateInput, CountyUncheckedUpdateInput>
    /**
     * Choose, which County to update.
     */
    where: CountyWhereUniqueInput
  }

  /**
   * County updateMany
   */
  export type CountyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Counties.
     */
    data: XOR<CountyUpdateManyMutationInput, CountyUncheckedUpdateManyInput>
    /**
     * Filter which Counties to update
     */
    where?: CountyWhereInput
    /**
     * Limit how many Counties to update.
     */
    limit?: number
  }

  /**
   * County updateManyAndReturn
   */
  export type CountyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * The data used to update Counties.
     */
    data: XOR<CountyUpdateManyMutationInput, CountyUncheckedUpdateManyInput>
    /**
     * Filter which Counties to update
     */
    where?: CountyWhereInput
    /**
     * Limit how many Counties to update.
     */
    limit?: number
  }

  /**
   * County upsert
   */
  export type CountyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * The filter to search for the County to update in case it exists.
     */
    where: CountyWhereUniqueInput
    /**
     * In case the County found by the `where` argument doesn't exist, create a new County with this data.
     */
    create: XOR<CountyCreateInput, CountyUncheckedCreateInput>
    /**
     * In case the County was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountyUpdateInput, CountyUncheckedUpdateInput>
  }

  /**
   * County delete
   */
  export type CountyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
    /**
     * Filter which County to delete.
     */
    where: CountyWhereUniqueInput
  }

  /**
   * County deleteMany
   */
  export type CountyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counties to delete
     */
    where?: CountyWhereInput
    /**
     * Limit how many Counties to delete.
     */
    limit?: number
  }

  /**
   * County.carriers
   */
  export type County$carriersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    where?: CarrierCountyWhereInput
    orderBy?: CarrierCountyOrderByWithRelationInput | CarrierCountyOrderByWithRelationInput[]
    cursor?: CarrierCountyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrierCountyScalarFieldEnum | CarrierCountyScalarFieldEnum[]
  }

  /**
   * County without action
   */
  export type CountyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the County
     */
    select?: CountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the County
     */
    omit?: CountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountyInclude<ExtArgs> | null
  }


  /**
   * Model Carrier
   */

  export type AggregateCarrier = {
    _count: CarrierCountAggregateOutputType | null
    _avg: CarrierAvgAggregateOutputType | null
    _sum: CarrierSumAggregateOutputType | null
    _min: CarrierMinAggregateOutputType | null
    _max: CarrierMaxAggregateOutputType | null
  }

  export type CarrierAvgAggregateOutputType = {
    id: number | null
  }

  export type CarrierSumAggregateOutputType = {
    id: number | null
  }

  export type CarrierMinAggregateOutputType = {
    id: number | null
    name: string | null
    rating: string | null
    type: string | null
    website: string | null
  }

  export type CarrierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    rating: string | null
    type: string | null
    website: string | null
  }

  export type CarrierCountAggregateOutputType = {
    id: number
    name: number
    rating: number
    type: number
    website: number
    _all: number
  }


  export type CarrierAvgAggregateInputType = {
    id?: true
  }

  export type CarrierSumAggregateInputType = {
    id?: true
  }

  export type CarrierMinAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    type?: true
    website?: true
  }

  export type CarrierMaxAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    type?: true
    website?: true
  }

  export type CarrierCountAggregateInputType = {
    id?: true
    name?: true
    rating?: true
    type?: true
    website?: true
    _all?: true
  }

  export type CarrierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carrier to aggregate.
     */
    where?: CarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carriers to fetch.
     */
    orderBy?: CarrierOrderByWithRelationInput | CarrierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carriers
    **/
    _count?: true | CarrierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrierMaxAggregateInputType
  }

  export type GetCarrierAggregateType<T extends CarrierAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrier[P]>
      : GetScalarType<T[P], AggregateCarrier[P]>
  }




  export type CarrierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrierWhereInput
    orderBy?: CarrierOrderByWithAggregationInput | CarrierOrderByWithAggregationInput[]
    by: CarrierScalarFieldEnum[] | CarrierScalarFieldEnum
    having?: CarrierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrierCountAggregateInputType | true
    _avg?: CarrierAvgAggregateInputType
    _sum?: CarrierSumAggregateInputType
    _min?: CarrierMinAggregateInputType
    _max?: CarrierMaxAggregateInputType
  }

  export type CarrierGroupByOutputType = {
    id: number
    name: string
    rating: string
    type: string
    website: string | null
    _count: CarrierCountAggregateOutputType | null
    _avg: CarrierAvgAggregateOutputType | null
    _sum: CarrierSumAggregateOutputType | null
    _min: CarrierMinAggregateOutputType | null
    _max: CarrierMaxAggregateOutputType | null
  }

  type GetCarrierGroupByPayload<T extends CarrierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrierGroupByOutputType[P]>
            : GetScalarType<T[P], CarrierGroupByOutputType[P]>
        }
      >
    >


  export type CarrierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rating?: boolean
    type?: boolean
    website?: boolean
    counties?: boolean | Carrier$countiesArgs<ExtArgs>
    _count?: boolean | CarrierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrier"]>

  export type CarrierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rating?: boolean
    type?: boolean
    website?: boolean
  }, ExtArgs["result"]["carrier"]>

  export type CarrierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    rating?: boolean
    type?: boolean
    website?: boolean
  }, ExtArgs["result"]["carrier"]>

  export type CarrierSelectScalar = {
    id?: boolean
    name?: boolean
    rating?: boolean
    type?: boolean
    website?: boolean
  }

  export type CarrierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "rating" | "type" | "website", ExtArgs["result"]["carrier"]>
  export type CarrierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counties?: boolean | Carrier$countiesArgs<ExtArgs>
    _count?: boolean | CarrierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CarrierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarrierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarrierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carrier"
    objects: {
      counties: Prisma.$CarrierCountyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      rating: string
      type: string
      website: string | null
    }, ExtArgs["result"]["carrier"]>
    composites: {}
  }

  type CarrierGetPayload<S extends boolean | null | undefined | CarrierDefaultArgs> = $Result.GetResult<Prisma.$CarrierPayload, S>

  type CarrierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarrierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrierCountAggregateInputType | true
    }

  export interface CarrierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carrier'], meta: { name: 'Carrier' } }
    /**
     * Find zero or one Carrier that matches the filter.
     * @param {CarrierFindUniqueArgs} args - Arguments to find a Carrier
     * @example
     * // Get one Carrier
     * const carrier = await prisma.carrier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarrierFindUniqueArgs>(args: SelectSubset<T, CarrierFindUniqueArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carrier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarrierFindUniqueOrThrowArgs} args - Arguments to find a Carrier
     * @example
     * // Get one Carrier
     * const carrier = await prisma.carrier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarrierFindUniqueOrThrowArgs>(args: SelectSubset<T, CarrierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierFindFirstArgs} args - Arguments to find a Carrier
     * @example
     * // Get one Carrier
     * const carrier = await prisma.carrier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarrierFindFirstArgs>(args?: SelectSubset<T, CarrierFindFirstArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carrier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierFindFirstOrThrowArgs} args - Arguments to find a Carrier
     * @example
     * // Get one Carrier
     * const carrier = await prisma.carrier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarrierFindFirstOrThrowArgs>(args?: SelectSubset<T, CarrierFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carriers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carriers
     * const carriers = await prisma.carrier.findMany()
     * 
     * // Get first 10 Carriers
     * const carriers = await prisma.carrier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrierWithIdOnly = await prisma.carrier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarrierFindManyArgs>(args?: SelectSubset<T, CarrierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carrier.
     * @param {CarrierCreateArgs} args - Arguments to create a Carrier.
     * @example
     * // Create one Carrier
     * const Carrier = await prisma.carrier.create({
     *   data: {
     *     // ... data to create a Carrier
     *   }
     * })
     * 
     */
    create<T extends CarrierCreateArgs>(args: SelectSubset<T, CarrierCreateArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carriers.
     * @param {CarrierCreateManyArgs} args - Arguments to create many Carriers.
     * @example
     * // Create many Carriers
     * const carrier = await prisma.carrier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarrierCreateManyArgs>(args?: SelectSubset<T, CarrierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carriers and returns the data saved in the database.
     * @param {CarrierCreateManyAndReturnArgs} args - Arguments to create many Carriers.
     * @example
     * // Create many Carriers
     * const carrier = await prisma.carrier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carriers and only return the `id`
     * const carrierWithIdOnly = await prisma.carrier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarrierCreateManyAndReturnArgs>(args?: SelectSubset<T, CarrierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carrier.
     * @param {CarrierDeleteArgs} args - Arguments to delete one Carrier.
     * @example
     * // Delete one Carrier
     * const Carrier = await prisma.carrier.delete({
     *   where: {
     *     // ... filter to delete one Carrier
     *   }
     * })
     * 
     */
    delete<T extends CarrierDeleteArgs>(args: SelectSubset<T, CarrierDeleteArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carrier.
     * @param {CarrierUpdateArgs} args - Arguments to update one Carrier.
     * @example
     * // Update one Carrier
     * const carrier = await prisma.carrier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarrierUpdateArgs>(args: SelectSubset<T, CarrierUpdateArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carriers.
     * @param {CarrierDeleteManyArgs} args - Arguments to filter Carriers to delete.
     * @example
     * // Delete a few Carriers
     * const { count } = await prisma.carrier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarrierDeleteManyArgs>(args?: SelectSubset<T, CarrierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carriers
     * const carrier = await prisma.carrier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarrierUpdateManyArgs>(args: SelectSubset<T, CarrierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carriers and returns the data updated in the database.
     * @param {CarrierUpdateManyAndReturnArgs} args - Arguments to update many Carriers.
     * @example
     * // Update many Carriers
     * const carrier = await prisma.carrier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carriers and only return the `id`
     * const carrierWithIdOnly = await prisma.carrier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarrierUpdateManyAndReturnArgs>(args: SelectSubset<T, CarrierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carrier.
     * @param {CarrierUpsertArgs} args - Arguments to update or create a Carrier.
     * @example
     * // Update or create a Carrier
     * const carrier = await prisma.carrier.upsert({
     *   create: {
     *     // ... data to create a Carrier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carrier we want to update
     *   }
     * })
     */
    upsert<T extends CarrierUpsertArgs>(args: SelectSubset<T, CarrierUpsertArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountArgs} args - Arguments to filter Carriers to count.
     * @example
     * // Count the number of Carriers
     * const count = await prisma.carrier.count({
     *   where: {
     *     // ... the filter for the Carriers we want to count
     *   }
     * })
    **/
    count<T extends CarrierCountArgs>(
      args?: Subset<T, CarrierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carrier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarrierAggregateArgs>(args: Subset<T, CarrierAggregateArgs>): Prisma.PrismaPromise<GetCarrierAggregateType<T>>

    /**
     * Group by Carrier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarrierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarrierGroupByArgs['orderBy'] }
        : { orderBy?: CarrierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarrierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carrier model
   */
  readonly fields: CarrierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carrier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarrierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    counties<T extends Carrier$countiesArgs<ExtArgs> = {}>(args?: Subset<T, Carrier$countiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carrier model
   */
  interface CarrierFieldRefs {
    readonly id: FieldRef<"Carrier", 'Int'>
    readonly name: FieldRef<"Carrier", 'String'>
    readonly rating: FieldRef<"Carrier", 'String'>
    readonly type: FieldRef<"Carrier", 'String'>
    readonly website: FieldRef<"Carrier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carrier findUnique
   */
  export type CarrierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * Filter, which Carrier to fetch.
     */
    where: CarrierWhereUniqueInput
  }

  /**
   * Carrier findUniqueOrThrow
   */
  export type CarrierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * Filter, which Carrier to fetch.
     */
    where: CarrierWhereUniqueInput
  }

  /**
   * Carrier findFirst
   */
  export type CarrierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * Filter, which Carrier to fetch.
     */
    where?: CarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carriers to fetch.
     */
    orderBy?: CarrierOrderByWithRelationInput | CarrierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carriers.
     */
    cursor?: CarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carriers.
     */
    distinct?: CarrierScalarFieldEnum | CarrierScalarFieldEnum[]
  }

  /**
   * Carrier findFirstOrThrow
   */
  export type CarrierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * Filter, which Carrier to fetch.
     */
    where?: CarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carriers to fetch.
     */
    orderBy?: CarrierOrderByWithRelationInput | CarrierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carriers.
     */
    cursor?: CarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carriers.
     */
    distinct?: CarrierScalarFieldEnum | CarrierScalarFieldEnum[]
  }

  /**
   * Carrier findMany
   */
  export type CarrierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * Filter, which Carriers to fetch.
     */
    where?: CarrierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carriers to fetch.
     */
    orderBy?: CarrierOrderByWithRelationInput | CarrierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carriers.
     */
    cursor?: CarrierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carriers.
     */
    distinct?: CarrierScalarFieldEnum | CarrierScalarFieldEnum[]
  }

  /**
   * Carrier create
   */
  export type CarrierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * The data needed to create a Carrier.
     */
    data: XOR<CarrierCreateInput, CarrierUncheckedCreateInput>
  }

  /**
   * Carrier createMany
   */
  export type CarrierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carriers.
     */
    data: CarrierCreateManyInput | CarrierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrier createManyAndReturn
   */
  export type CarrierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * The data used to create many Carriers.
     */
    data: CarrierCreateManyInput | CarrierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carrier update
   */
  export type CarrierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * The data needed to update a Carrier.
     */
    data: XOR<CarrierUpdateInput, CarrierUncheckedUpdateInput>
    /**
     * Choose, which Carrier to update.
     */
    where: CarrierWhereUniqueInput
  }

  /**
   * Carrier updateMany
   */
  export type CarrierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carriers.
     */
    data: XOR<CarrierUpdateManyMutationInput, CarrierUncheckedUpdateManyInput>
    /**
     * Filter which Carriers to update
     */
    where?: CarrierWhereInput
    /**
     * Limit how many Carriers to update.
     */
    limit?: number
  }

  /**
   * Carrier updateManyAndReturn
   */
  export type CarrierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * The data used to update Carriers.
     */
    data: XOR<CarrierUpdateManyMutationInput, CarrierUncheckedUpdateManyInput>
    /**
     * Filter which Carriers to update
     */
    where?: CarrierWhereInput
    /**
     * Limit how many Carriers to update.
     */
    limit?: number
  }

  /**
   * Carrier upsert
   */
  export type CarrierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * The filter to search for the Carrier to update in case it exists.
     */
    where: CarrierWhereUniqueInput
    /**
     * In case the Carrier found by the `where` argument doesn't exist, create a new Carrier with this data.
     */
    create: XOR<CarrierCreateInput, CarrierUncheckedCreateInput>
    /**
     * In case the Carrier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarrierUpdateInput, CarrierUncheckedUpdateInput>
  }

  /**
   * Carrier delete
   */
  export type CarrierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
    /**
     * Filter which Carrier to delete.
     */
    where: CarrierWhereUniqueInput
  }

  /**
   * Carrier deleteMany
   */
  export type CarrierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carriers to delete
     */
    where?: CarrierWhereInput
    /**
     * Limit how many Carriers to delete.
     */
    limit?: number
  }

  /**
   * Carrier.counties
   */
  export type Carrier$countiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    where?: CarrierCountyWhereInput
    orderBy?: CarrierCountyOrderByWithRelationInput | CarrierCountyOrderByWithRelationInput[]
    cursor?: CarrierCountyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarrierCountyScalarFieldEnum | CarrierCountyScalarFieldEnum[]
  }

  /**
   * Carrier without action
   */
  export type CarrierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carrier
     */
    select?: CarrierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carrier
     */
    omit?: CarrierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierInclude<ExtArgs> | null
  }


  /**
   * Model CarrierCounty
   */

  export type AggregateCarrierCounty = {
    _count: CarrierCountyCountAggregateOutputType | null
    _avg: CarrierCountyAvgAggregateOutputType | null
    _sum: CarrierCountySumAggregateOutputType | null
    _min: CarrierCountyMinAggregateOutputType | null
    _max: CarrierCountyMaxAggregateOutputType | null
  }

  export type CarrierCountyAvgAggregateOutputType = {
    id: number | null
    carrierId: number | null
    countyId: number | null
    minDwelling: number | null
    maxProtectionClass: number | null
  }

  export type CarrierCountySumAggregateOutputType = {
    id: number | null
    carrierId: number | null
    countyId: number | null
    minDwelling: number | null
    maxProtectionClass: number | null
  }

  export type CarrierCountyMinAggregateOutputType = {
    id: number | null
    carrierId: number | null
    countyId: number | null
    appetiteLevel: string | null
    windHailStance: string | null
    windHailDetail: string | null
    minDwelling: number | null
    constructionNote: string | null
    maxProtectionClass: number | null
    uwNotes: string | null
    updatedAt: Date | null
  }

  export type CarrierCountyMaxAggregateOutputType = {
    id: number | null
    carrierId: number | null
    countyId: number | null
    appetiteLevel: string | null
    windHailStance: string | null
    windHailDetail: string | null
    minDwelling: number | null
    constructionNote: string | null
    maxProtectionClass: number | null
    uwNotes: string | null
    updatedAt: Date | null
  }

  export type CarrierCountyCountAggregateOutputType = {
    id: number
    carrierId: number
    countyId: number
    appetiteLevel: number
    windHailStance: number
    windHailDetail: number
    minDwelling: number
    constructionNote: number
    maxProtectionClass: number
    uwNotes: number
    updatedAt: number
    _all: number
  }


  export type CarrierCountyAvgAggregateInputType = {
    id?: true
    carrierId?: true
    countyId?: true
    minDwelling?: true
    maxProtectionClass?: true
  }

  export type CarrierCountySumAggregateInputType = {
    id?: true
    carrierId?: true
    countyId?: true
    minDwelling?: true
    maxProtectionClass?: true
  }

  export type CarrierCountyMinAggregateInputType = {
    id?: true
    carrierId?: true
    countyId?: true
    appetiteLevel?: true
    windHailStance?: true
    windHailDetail?: true
    minDwelling?: true
    constructionNote?: true
    maxProtectionClass?: true
    uwNotes?: true
    updatedAt?: true
  }

  export type CarrierCountyMaxAggregateInputType = {
    id?: true
    carrierId?: true
    countyId?: true
    appetiteLevel?: true
    windHailStance?: true
    windHailDetail?: true
    minDwelling?: true
    constructionNote?: true
    maxProtectionClass?: true
    uwNotes?: true
    updatedAt?: true
  }

  export type CarrierCountyCountAggregateInputType = {
    id?: true
    carrierId?: true
    countyId?: true
    appetiteLevel?: true
    windHailStance?: true
    windHailDetail?: true
    minDwelling?: true
    constructionNote?: true
    maxProtectionClass?: true
    uwNotes?: true
    updatedAt?: true
    _all?: true
  }

  export type CarrierCountyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarrierCounty to aggregate.
     */
    where?: CarrierCountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrierCounties to fetch.
     */
    orderBy?: CarrierCountyOrderByWithRelationInput | CarrierCountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarrierCountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrierCounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrierCounties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CarrierCounties
    **/
    _count?: true | CarrierCountyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarrierCountyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarrierCountySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarrierCountyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarrierCountyMaxAggregateInputType
  }

  export type GetCarrierCountyAggregateType<T extends CarrierCountyAggregateArgs> = {
        [P in keyof T & keyof AggregateCarrierCounty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarrierCounty[P]>
      : GetScalarType<T[P], AggregateCarrierCounty[P]>
  }




  export type CarrierCountyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarrierCountyWhereInput
    orderBy?: CarrierCountyOrderByWithAggregationInput | CarrierCountyOrderByWithAggregationInput[]
    by: CarrierCountyScalarFieldEnum[] | CarrierCountyScalarFieldEnum
    having?: CarrierCountyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarrierCountyCountAggregateInputType | true
    _avg?: CarrierCountyAvgAggregateInputType
    _sum?: CarrierCountySumAggregateInputType
    _min?: CarrierCountyMinAggregateInputType
    _max?: CarrierCountyMaxAggregateInputType
  }

  export type CarrierCountyGroupByOutputType = {
    id: number
    carrierId: number
    countyId: number
    appetiteLevel: string
    windHailStance: string
    windHailDetail: string | null
    minDwelling: number | null
    constructionNote: string | null
    maxProtectionClass: number | null
    uwNotes: string | null
    updatedAt: Date
    _count: CarrierCountyCountAggregateOutputType | null
    _avg: CarrierCountyAvgAggregateOutputType | null
    _sum: CarrierCountySumAggregateOutputType | null
    _min: CarrierCountyMinAggregateOutputType | null
    _max: CarrierCountyMaxAggregateOutputType | null
  }

  type GetCarrierCountyGroupByPayload<T extends CarrierCountyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarrierCountyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarrierCountyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarrierCountyGroupByOutputType[P]>
            : GetScalarType<T[P], CarrierCountyGroupByOutputType[P]>
        }
      >
    >


  export type CarrierCountySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrierId?: boolean
    countyId?: boolean
    appetiteLevel?: boolean
    windHailStance?: boolean
    windHailDetail?: boolean
    minDwelling?: boolean
    constructionNote?: boolean
    maxProtectionClass?: boolean
    uwNotes?: boolean
    updatedAt?: boolean
    carrier?: boolean | CarrierDefaultArgs<ExtArgs>
    county?: boolean | CountyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrierCounty"]>

  export type CarrierCountySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrierId?: boolean
    countyId?: boolean
    appetiteLevel?: boolean
    windHailStance?: boolean
    windHailDetail?: boolean
    minDwelling?: boolean
    constructionNote?: boolean
    maxProtectionClass?: boolean
    uwNotes?: boolean
    updatedAt?: boolean
    carrier?: boolean | CarrierDefaultArgs<ExtArgs>
    county?: boolean | CountyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrierCounty"]>

  export type CarrierCountySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    carrierId?: boolean
    countyId?: boolean
    appetiteLevel?: boolean
    windHailStance?: boolean
    windHailDetail?: boolean
    minDwelling?: boolean
    constructionNote?: boolean
    maxProtectionClass?: boolean
    uwNotes?: boolean
    updatedAt?: boolean
    carrier?: boolean | CarrierDefaultArgs<ExtArgs>
    county?: boolean | CountyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carrierCounty"]>

  export type CarrierCountySelectScalar = {
    id?: boolean
    carrierId?: boolean
    countyId?: boolean
    appetiteLevel?: boolean
    windHailStance?: boolean
    windHailDetail?: boolean
    minDwelling?: boolean
    constructionNote?: boolean
    maxProtectionClass?: boolean
    uwNotes?: boolean
    updatedAt?: boolean
  }

  export type CarrierCountyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "carrierId" | "countyId" | "appetiteLevel" | "windHailStance" | "windHailDetail" | "minDwelling" | "constructionNote" | "maxProtectionClass" | "uwNotes" | "updatedAt", ExtArgs["result"]["carrierCounty"]>
  export type CarrierCountyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrier?: boolean | CarrierDefaultArgs<ExtArgs>
    county?: boolean | CountyDefaultArgs<ExtArgs>
  }
  export type CarrierCountyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrier?: boolean | CarrierDefaultArgs<ExtArgs>
    county?: boolean | CountyDefaultArgs<ExtArgs>
  }
  export type CarrierCountyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrier?: boolean | CarrierDefaultArgs<ExtArgs>
    county?: boolean | CountyDefaultArgs<ExtArgs>
  }

  export type $CarrierCountyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CarrierCounty"
    objects: {
      carrier: Prisma.$CarrierPayload<ExtArgs>
      county: Prisma.$CountyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      carrierId: number
      countyId: number
      appetiteLevel: string
      windHailStance: string
      windHailDetail: string | null
      minDwelling: number | null
      constructionNote: string | null
      maxProtectionClass: number | null
      uwNotes: string | null
      updatedAt: Date
    }, ExtArgs["result"]["carrierCounty"]>
    composites: {}
  }

  type CarrierCountyGetPayload<S extends boolean | null | undefined | CarrierCountyDefaultArgs> = $Result.GetResult<Prisma.$CarrierCountyPayload, S>

  type CarrierCountyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarrierCountyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarrierCountyCountAggregateInputType | true
    }

  export interface CarrierCountyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CarrierCounty'], meta: { name: 'CarrierCounty' } }
    /**
     * Find zero or one CarrierCounty that matches the filter.
     * @param {CarrierCountyFindUniqueArgs} args - Arguments to find a CarrierCounty
     * @example
     * // Get one CarrierCounty
     * const carrierCounty = await prisma.carrierCounty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarrierCountyFindUniqueArgs>(args: SelectSubset<T, CarrierCountyFindUniqueArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CarrierCounty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarrierCountyFindUniqueOrThrowArgs} args - Arguments to find a CarrierCounty
     * @example
     * // Get one CarrierCounty
     * const carrierCounty = await prisma.carrierCounty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarrierCountyFindUniqueOrThrowArgs>(args: SelectSubset<T, CarrierCountyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarrierCounty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountyFindFirstArgs} args - Arguments to find a CarrierCounty
     * @example
     * // Get one CarrierCounty
     * const carrierCounty = await prisma.carrierCounty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarrierCountyFindFirstArgs>(args?: SelectSubset<T, CarrierCountyFindFirstArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CarrierCounty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountyFindFirstOrThrowArgs} args - Arguments to find a CarrierCounty
     * @example
     * // Get one CarrierCounty
     * const carrierCounty = await prisma.carrierCounty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarrierCountyFindFirstOrThrowArgs>(args?: SelectSubset<T, CarrierCountyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CarrierCounties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CarrierCounties
     * const carrierCounties = await prisma.carrierCounty.findMany()
     * 
     * // Get first 10 CarrierCounties
     * const carrierCounties = await prisma.carrierCounty.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carrierCountyWithIdOnly = await prisma.carrierCounty.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarrierCountyFindManyArgs>(args?: SelectSubset<T, CarrierCountyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CarrierCounty.
     * @param {CarrierCountyCreateArgs} args - Arguments to create a CarrierCounty.
     * @example
     * // Create one CarrierCounty
     * const CarrierCounty = await prisma.carrierCounty.create({
     *   data: {
     *     // ... data to create a CarrierCounty
     *   }
     * })
     * 
     */
    create<T extends CarrierCountyCreateArgs>(args: SelectSubset<T, CarrierCountyCreateArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CarrierCounties.
     * @param {CarrierCountyCreateManyArgs} args - Arguments to create many CarrierCounties.
     * @example
     * // Create many CarrierCounties
     * const carrierCounty = await prisma.carrierCounty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarrierCountyCreateManyArgs>(args?: SelectSubset<T, CarrierCountyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CarrierCounties and returns the data saved in the database.
     * @param {CarrierCountyCreateManyAndReturnArgs} args - Arguments to create many CarrierCounties.
     * @example
     * // Create many CarrierCounties
     * const carrierCounty = await prisma.carrierCounty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CarrierCounties and only return the `id`
     * const carrierCountyWithIdOnly = await prisma.carrierCounty.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarrierCountyCreateManyAndReturnArgs>(args?: SelectSubset<T, CarrierCountyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CarrierCounty.
     * @param {CarrierCountyDeleteArgs} args - Arguments to delete one CarrierCounty.
     * @example
     * // Delete one CarrierCounty
     * const CarrierCounty = await prisma.carrierCounty.delete({
     *   where: {
     *     // ... filter to delete one CarrierCounty
     *   }
     * })
     * 
     */
    delete<T extends CarrierCountyDeleteArgs>(args: SelectSubset<T, CarrierCountyDeleteArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CarrierCounty.
     * @param {CarrierCountyUpdateArgs} args - Arguments to update one CarrierCounty.
     * @example
     * // Update one CarrierCounty
     * const carrierCounty = await prisma.carrierCounty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarrierCountyUpdateArgs>(args: SelectSubset<T, CarrierCountyUpdateArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CarrierCounties.
     * @param {CarrierCountyDeleteManyArgs} args - Arguments to filter CarrierCounties to delete.
     * @example
     * // Delete a few CarrierCounties
     * const { count } = await prisma.carrierCounty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarrierCountyDeleteManyArgs>(args?: SelectSubset<T, CarrierCountyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarrierCounties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CarrierCounties
     * const carrierCounty = await prisma.carrierCounty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarrierCountyUpdateManyArgs>(args: SelectSubset<T, CarrierCountyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CarrierCounties and returns the data updated in the database.
     * @param {CarrierCountyUpdateManyAndReturnArgs} args - Arguments to update many CarrierCounties.
     * @example
     * // Update many CarrierCounties
     * const carrierCounty = await prisma.carrierCounty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CarrierCounties and only return the `id`
     * const carrierCountyWithIdOnly = await prisma.carrierCounty.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CarrierCountyUpdateManyAndReturnArgs>(args: SelectSubset<T, CarrierCountyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CarrierCounty.
     * @param {CarrierCountyUpsertArgs} args - Arguments to update or create a CarrierCounty.
     * @example
     * // Update or create a CarrierCounty
     * const carrierCounty = await prisma.carrierCounty.upsert({
     *   create: {
     *     // ... data to create a CarrierCounty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CarrierCounty we want to update
     *   }
     * })
     */
    upsert<T extends CarrierCountyUpsertArgs>(args: SelectSubset<T, CarrierCountyUpsertArgs<ExtArgs>>): Prisma__CarrierCountyClient<$Result.GetResult<Prisma.$CarrierCountyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CarrierCounties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountyCountArgs} args - Arguments to filter CarrierCounties to count.
     * @example
     * // Count the number of CarrierCounties
     * const count = await prisma.carrierCounty.count({
     *   where: {
     *     // ... the filter for the CarrierCounties we want to count
     *   }
     * })
    **/
    count<T extends CarrierCountyCountArgs>(
      args?: Subset<T, CarrierCountyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarrierCountyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CarrierCounty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CarrierCountyAggregateArgs>(args: Subset<T, CarrierCountyAggregateArgs>): Prisma.PrismaPromise<GetCarrierCountyAggregateType<T>>

    /**
     * Group by CarrierCounty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarrierCountyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CarrierCountyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarrierCountyGroupByArgs['orderBy'] }
        : { orderBy?: CarrierCountyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CarrierCountyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrierCountyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CarrierCounty model
   */
  readonly fields: CarrierCountyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CarrierCounty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarrierCountyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrier<T extends CarrierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarrierDefaultArgs<ExtArgs>>): Prisma__CarrierClient<$Result.GetResult<Prisma.$CarrierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    county<T extends CountyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountyDefaultArgs<ExtArgs>>): Prisma__CountyClient<$Result.GetResult<Prisma.$CountyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CarrierCounty model
   */
  interface CarrierCountyFieldRefs {
    readonly id: FieldRef<"CarrierCounty", 'Int'>
    readonly carrierId: FieldRef<"CarrierCounty", 'Int'>
    readonly countyId: FieldRef<"CarrierCounty", 'Int'>
    readonly appetiteLevel: FieldRef<"CarrierCounty", 'String'>
    readonly windHailStance: FieldRef<"CarrierCounty", 'String'>
    readonly windHailDetail: FieldRef<"CarrierCounty", 'String'>
    readonly minDwelling: FieldRef<"CarrierCounty", 'Int'>
    readonly constructionNote: FieldRef<"CarrierCounty", 'String'>
    readonly maxProtectionClass: FieldRef<"CarrierCounty", 'Int'>
    readonly uwNotes: FieldRef<"CarrierCounty", 'String'>
    readonly updatedAt: FieldRef<"CarrierCounty", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CarrierCounty findUnique
   */
  export type CarrierCountyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * Filter, which CarrierCounty to fetch.
     */
    where: CarrierCountyWhereUniqueInput
  }

  /**
   * CarrierCounty findUniqueOrThrow
   */
  export type CarrierCountyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * Filter, which CarrierCounty to fetch.
     */
    where: CarrierCountyWhereUniqueInput
  }

  /**
   * CarrierCounty findFirst
   */
  export type CarrierCountyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * Filter, which CarrierCounty to fetch.
     */
    where?: CarrierCountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrierCounties to fetch.
     */
    orderBy?: CarrierCountyOrderByWithRelationInput | CarrierCountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarrierCounties.
     */
    cursor?: CarrierCountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrierCounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrierCounties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarrierCounties.
     */
    distinct?: CarrierCountyScalarFieldEnum | CarrierCountyScalarFieldEnum[]
  }

  /**
   * CarrierCounty findFirstOrThrow
   */
  export type CarrierCountyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * Filter, which CarrierCounty to fetch.
     */
    where?: CarrierCountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrierCounties to fetch.
     */
    orderBy?: CarrierCountyOrderByWithRelationInput | CarrierCountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CarrierCounties.
     */
    cursor?: CarrierCountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrierCounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrierCounties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarrierCounties.
     */
    distinct?: CarrierCountyScalarFieldEnum | CarrierCountyScalarFieldEnum[]
  }

  /**
   * CarrierCounty findMany
   */
  export type CarrierCountyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * Filter, which CarrierCounties to fetch.
     */
    where?: CarrierCountyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CarrierCounties to fetch.
     */
    orderBy?: CarrierCountyOrderByWithRelationInput | CarrierCountyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CarrierCounties.
     */
    cursor?: CarrierCountyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CarrierCounties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CarrierCounties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CarrierCounties.
     */
    distinct?: CarrierCountyScalarFieldEnum | CarrierCountyScalarFieldEnum[]
  }

  /**
   * CarrierCounty create
   */
  export type CarrierCountyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * The data needed to create a CarrierCounty.
     */
    data: XOR<CarrierCountyCreateInput, CarrierCountyUncheckedCreateInput>
  }

  /**
   * CarrierCounty createMany
   */
  export type CarrierCountyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CarrierCounties.
     */
    data: CarrierCountyCreateManyInput | CarrierCountyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CarrierCounty createManyAndReturn
   */
  export type CarrierCountyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * The data used to create many CarrierCounties.
     */
    data: CarrierCountyCreateManyInput | CarrierCountyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarrierCounty update
   */
  export type CarrierCountyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * The data needed to update a CarrierCounty.
     */
    data: XOR<CarrierCountyUpdateInput, CarrierCountyUncheckedUpdateInput>
    /**
     * Choose, which CarrierCounty to update.
     */
    where: CarrierCountyWhereUniqueInput
  }

  /**
   * CarrierCounty updateMany
   */
  export type CarrierCountyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CarrierCounties.
     */
    data: XOR<CarrierCountyUpdateManyMutationInput, CarrierCountyUncheckedUpdateManyInput>
    /**
     * Filter which CarrierCounties to update
     */
    where?: CarrierCountyWhereInput
    /**
     * Limit how many CarrierCounties to update.
     */
    limit?: number
  }

  /**
   * CarrierCounty updateManyAndReturn
   */
  export type CarrierCountyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * The data used to update CarrierCounties.
     */
    data: XOR<CarrierCountyUpdateManyMutationInput, CarrierCountyUncheckedUpdateManyInput>
    /**
     * Filter which CarrierCounties to update
     */
    where?: CarrierCountyWhereInput
    /**
     * Limit how many CarrierCounties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CarrierCounty upsert
   */
  export type CarrierCountyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * The filter to search for the CarrierCounty to update in case it exists.
     */
    where: CarrierCountyWhereUniqueInput
    /**
     * In case the CarrierCounty found by the `where` argument doesn't exist, create a new CarrierCounty with this data.
     */
    create: XOR<CarrierCountyCreateInput, CarrierCountyUncheckedCreateInput>
    /**
     * In case the CarrierCounty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarrierCountyUpdateInput, CarrierCountyUncheckedUpdateInput>
  }

  /**
   * CarrierCounty delete
   */
  export type CarrierCountyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
    /**
     * Filter which CarrierCounty to delete.
     */
    where: CarrierCountyWhereUniqueInput
  }

  /**
   * CarrierCounty deleteMany
   */
  export type CarrierCountyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CarrierCounties to delete
     */
    where?: CarrierCountyWhereInput
    /**
     * Limit how many CarrierCounties to delete.
     */
    limit?: number
  }

  /**
   * CarrierCounty without action
   */
  export type CarrierCountyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarrierCounty
     */
    select?: CarrierCountySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CarrierCounty
     */
    omit?: CarrierCountyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarrierCountyInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isBeachPlan: 'isBeachPlan'
  };

  export type CountyScalarFieldEnum = (typeof CountyScalarFieldEnum)[keyof typeof CountyScalarFieldEnum]


  export const CarrierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rating: 'rating',
    type: 'type',
    website: 'website'
  };

  export type CarrierScalarFieldEnum = (typeof CarrierScalarFieldEnum)[keyof typeof CarrierScalarFieldEnum]


  export const CarrierCountyScalarFieldEnum: {
    id: 'id',
    carrierId: 'carrierId',
    countyId: 'countyId',
    appetiteLevel: 'appetiteLevel',
    windHailStance: 'windHailStance',
    windHailDetail: 'windHailDetail',
    minDwelling: 'minDwelling',
    constructionNote: 'constructionNote',
    maxProtectionClass: 'maxProtectionClass',
    uwNotes: 'uwNotes',
    updatedAt: 'updatedAt'
  };

  export type CarrierCountyScalarFieldEnum = (typeof CarrierCountyScalarFieldEnum)[keyof typeof CarrierCountyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CountyWhereInput = {
    AND?: CountyWhereInput | CountyWhereInput[]
    OR?: CountyWhereInput[]
    NOT?: CountyWhereInput | CountyWhereInput[]
    id?: IntFilter<"County"> | number
    name?: StringFilter<"County"> | string
    isBeachPlan?: BoolFilter<"County"> | boolean
    carriers?: CarrierCountyListRelationFilter
  }

  export type CountyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isBeachPlan?: SortOrder
    carriers?: CarrierCountyOrderByRelationAggregateInput
  }

  export type CountyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CountyWhereInput | CountyWhereInput[]
    OR?: CountyWhereInput[]
    NOT?: CountyWhereInput | CountyWhereInput[]
    isBeachPlan?: BoolFilter<"County"> | boolean
    carriers?: CarrierCountyListRelationFilter
  }, "id" | "name">

  export type CountyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isBeachPlan?: SortOrder
    _count?: CountyCountOrderByAggregateInput
    _avg?: CountyAvgOrderByAggregateInput
    _max?: CountyMaxOrderByAggregateInput
    _min?: CountyMinOrderByAggregateInput
    _sum?: CountySumOrderByAggregateInput
  }

  export type CountyScalarWhereWithAggregatesInput = {
    AND?: CountyScalarWhereWithAggregatesInput | CountyScalarWhereWithAggregatesInput[]
    OR?: CountyScalarWhereWithAggregatesInput[]
    NOT?: CountyScalarWhereWithAggregatesInput | CountyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"County"> | number
    name?: StringWithAggregatesFilter<"County"> | string
    isBeachPlan?: BoolWithAggregatesFilter<"County"> | boolean
  }

  export type CarrierWhereInput = {
    AND?: CarrierWhereInput | CarrierWhereInput[]
    OR?: CarrierWhereInput[]
    NOT?: CarrierWhereInput | CarrierWhereInput[]
    id?: IntFilter<"Carrier"> | number
    name?: StringFilter<"Carrier"> | string
    rating?: StringFilter<"Carrier"> | string
    type?: StringFilter<"Carrier"> | string
    website?: StringNullableFilter<"Carrier"> | string | null
    counties?: CarrierCountyListRelationFilter
  }

  export type CarrierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    website?: SortOrderInput | SortOrder
    counties?: CarrierCountyOrderByRelationAggregateInput
  }

  export type CarrierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CarrierWhereInput | CarrierWhereInput[]
    OR?: CarrierWhereInput[]
    NOT?: CarrierWhereInput | CarrierWhereInput[]
    rating?: StringFilter<"Carrier"> | string
    type?: StringFilter<"Carrier"> | string
    website?: StringNullableFilter<"Carrier"> | string | null
    counties?: CarrierCountyListRelationFilter
  }, "id" | "name">

  export type CarrierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    website?: SortOrderInput | SortOrder
    _count?: CarrierCountOrderByAggregateInput
    _avg?: CarrierAvgOrderByAggregateInput
    _max?: CarrierMaxOrderByAggregateInput
    _min?: CarrierMinOrderByAggregateInput
    _sum?: CarrierSumOrderByAggregateInput
  }

  export type CarrierScalarWhereWithAggregatesInput = {
    AND?: CarrierScalarWhereWithAggregatesInput | CarrierScalarWhereWithAggregatesInput[]
    OR?: CarrierScalarWhereWithAggregatesInput[]
    NOT?: CarrierScalarWhereWithAggregatesInput | CarrierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Carrier"> | number
    name?: StringWithAggregatesFilter<"Carrier"> | string
    rating?: StringWithAggregatesFilter<"Carrier"> | string
    type?: StringWithAggregatesFilter<"Carrier"> | string
    website?: StringNullableWithAggregatesFilter<"Carrier"> | string | null
  }

  export type CarrierCountyWhereInput = {
    AND?: CarrierCountyWhereInput | CarrierCountyWhereInput[]
    OR?: CarrierCountyWhereInput[]
    NOT?: CarrierCountyWhereInput | CarrierCountyWhereInput[]
    id?: IntFilter<"CarrierCounty"> | number
    carrierId?: IntFilter<"CarrierCounty"> | number
    countyId?: IntFilter<"CarrierCounty"> | number
    appetiteLevel?: StringFilter<"CarrierCounty"> | string
    windHailStance?: StringFilter<"CarrierCounty"> | string
    windHailDetail?: StringNullableFilter<"CarrierCounty"> | string | null
    minDwelling?: IntNullableFilter<"CarrierCounty"> | number | null
    constructionNote?: StringNullableFilter<"CarrierCounty"> | string | null
    maxProtectionClass?: IntNullableFilter<"CarrierCounty"> | number | null
    uwNotes?: StringNullableFilter<"CarrierCounty"> | string | null
    updatedAt?: DateTimeFilter<"CarrierCounty"> | Date | string
    carrier?: XOR<CarrierScalarRelationFilter, CarrierWhereInput>
    county?: XOR<CountyScalarRelationFilter, CountyWhereInput>
  }

  export type CarrierCountyOrderByWithRelationInput = {
    id?: SortOrder
    carrierId?: SortOrder
    countyId?: SortOrder
    appetiteLevel?: SortOrder
    windHailStance?: SortOrder
    windHailDetail?: SortOrderInput | SortOrder
    minDwelling?: SortOrderInput | SortOrder
    constructionNote?: SortOrderInput | SortOrder
    maxProtectionClass?: SortOrderInput | SortOrder
    uwNotes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    carrier?: CarrierOrderByWithRelationInput
    county?: CountyOrderByWithRelationInput
  }

  export type CarrierCountyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    carrierId_countyId?: CarrierCountyCarrierIdCountyIdCompoundUniqueInput
    AND?: CarrierCountyWhereInput | CarrierCountyWhereInput[]
    OR?: CarrierCountyWhereInput[]
    NOT?: CarrierCountyWhereInput | CarrierCountyWhereInput[]
    carrierId?: IntFilter<"CarrierCounty"> | number
    countyId?: IntFilter<"CarrierCounty"> | number
    appetiteLevel?: StringFilter<"CarrierCounty"> | string
    windHailStance?: StringFilter<"CarrierCounty"> | string
    windHailDetail?: StringNullableFilter<"CarrierCounty"> | string | null
    minDwelling?: IntNullableFilter<"CarrierCounty"> | number | null
    constructionNote?: StringNullableFilter<"CarrierCounty"> | string | null
    maxProtectionClass?: IntNullableFilter<"CarrierCounty"> | number | null
    uwNotes?: StringNullableFilter<"CarrierCounty"> | string | null
    updatedAt?: DateTimeFilter<"CarrierCounty"> | Date | string
    carrier?: XOR<CarrierScalarRelationFilter, CarrierWhereInput>
    county?: XOR<CountyScalarRelationFilter, CountyWhereInput>
  }, "id" | "carrierId_countyId">

  export type CarrierCountyOrderByWithAggregationInput = {
    id?: SortOrder
    carrierId?: SortOrder
    countyId?: SortOrder
    appetiteLevel?: SortOrder
    windHailStance?: SortOrder
    windHailDetail?: SortOrderInput | SortOrder
    minDwelling?: SortOrderInput | SortOrder
    constructionNote?: SortOrderInput | SortOrder
    maxProtectionClass?: SortOrderInput | SortOrder
    uwNotes?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: CarrierCountyCountOrderByAggregateInput
    _avg?: CarrierCountyAvgOrderByAggregateInput
    _max?: CarrierCountyMaxOrderByAggregateInput
    _min?: CarrierCountyMinOrderByAggregateInput
    _sum?: CarrierCountySumOrderByAggregateInput
  }

  export type CarrierCountyScalarWhereWithAggregatesInput = {
    AND?: CarrierCountyScalarWhereWithAggregatesInput | CarrierCountyScalarWhereWithAggregatesInput[]
    OR?: CarrierCountyScalarWhereWithAggregatesInput[]
    NOT?: CarrierCountyScalarWhereWithAggregatesInput | CarrierCountyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CarrierCounty"> | number
    carrierId?: IntWithAggregatesFilter<"CarrierCounty"> | number
    countyId?: IntWithAggregatesFilter<"CarrierCounty"> | number
    appetiteLevel?: StringWithAggregatesFilter<"CarrierCounty"> | string
    windHailStance?: StringWithAggregatesFilter<"CarrierCounty"> | string
    windHailDetail?: StringNullableWithAggregatesFilter<"CarrierCounty"> | string | null
    minDwelling?: IntNullableWithAggregatesFilter<"CarrierCounty"> | number | null
    constructionNote?: StringNullableWithAggregatesFilter<"CarrierCounty"> | string | null
    maxProtectionClass?: IntNullableWithAggregatesFilter<"CarrierCounty"> | number | null
    uwNotes?: StringNullableWithAggregatesFilter<"CarrierCounty"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"CarrierCounty"> | Date | string
  }

  export type CountyCreateInput = {
    name: string
    isBeachPlan?: boolean
    carriers?: CarrierCountyCreateNestedManyWithoutCountyInput
  }

  export type CountyUncheckedCreateInput = {
    id?: number
    name: string
    isBeachPlan?: boolean
    carriers?: CarrierCountyUncheckedCreateNestedManyWithoutCountyInput
  }

  export type CountyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isBeachPlan?: BoolFieldUpdateOperationsInput | boolean
    carriers?: CarrierCountyUpdateManyWithoutCountyNestedInput
  }

  export type CountyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isBeachPlan?: BoolFieldUpdateOperationsInput | boolean
    carriers?: CarrierCountyUncheckedUpdateManyWithoutCountyNestedInput
  }

  export type CountyCreateManyInput = {
    id?: number
    name: string
    isBeachPlan?: boolean
  }

  export type CountyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isBeachPlan?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CountyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isBeachPlan?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarrierCreateInput = {
    name: string
    rating: string
    type?: string
    website?: string | null
    counties?: CarrierCountyCreateNestedManyWithoutCarrierInput
  }

  export type CarrierUncheckedCreateInput = {
    id?: number
    name: string
    rating: string
    type?: string
    website?: string | null
    counties?: CarrierCountyUncheckedCreateNestedManyWithoutCarrierInput
  }

  export type CarrierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    counties?: CarrierCountyUpdateManyWithoutCarrierNestedInput
  }

  export type CarrierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    counties?: CarrierCountyUncheckedUpdateManyWithoutCarrierNestedInput
  }

  export type CarrierCreateManyInput = {
    id?: number
    name: string
    rating: string
    type?: string
    website?: string | null
  }

  export type CarrierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarrierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarrierCountyCreateInput = {
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
    carrier: CarrierCreateNestedOneWithoutCountiesInput
    county: CountyCreateNestedOneWithoutCarriersInput
  }

  export type CarrierCountyUncheckedCreateInput = {
    id?: number
    carrierId: number
    countyId: number
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
  }

  export type CarrierCountyUpdateInput = {
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrier?: CarrierUpdateOneRequiredWithoutCountiesNestedInput
    county?: CountyUpdateOneRequiredWithoutCarriersNestedInput
  }

  export type CarrierCountyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrierId?: IntFieldUpdateOperationsInput | number
    countyId?: IntFieldUpdateOperationsInput | number
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrierCountyCreateManyInput = {
    id?: number
    carrierId: number
    countyId: number
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
  }

  export type CarrierCountyUpdateManyMutationInput = {
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrierCountyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrierId?: IntFieldUpdateOperationsInput | number
    countyId?: IntFieldUpdateOperationsInput | number
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CarrierCountyListRelationFilter = {
    every?: CarrierCountyWhereInput
    some?: CarrierCountyWhereInput
    none?: CarrierCountyWhereInput
  }

  export type CarrierCountyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isBeachPlan?: SortOrder
  }

  export type CountyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isBeachPlan?: SortOrder
  }

  export type CountyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isBeachPlan?: SortOrder
  }

  export type CountySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CarrierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    website?: SortOrder
  }

  export type CarrierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CarrierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    website?: SortOrder
  }

  export type CarrierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    type?: SortOrder
    website?: SortOrder
  }

  export type CarrierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CarrierScalarRelationFilter = {
    is?: CarrierWhereInput
    isNot?: CarrierWhereInput
  }

  export type CountyScalarRelationFilter = {
    is?: CountyWhereInput
    isNot?: CountyWhereInput
  }

  export type CarrierCountyCarrierIdCountyIdCompoundUniqueInput = {
    carrierId: number
    countyId: number
  }

  export type CarrierCountyCountOrderByAggregateInput = {
    id?: SortOrder
    carrierId?: SortOrder
    countyId?: SortOrder
    appetiteLevel?: SortOrder
    windHailStance?: SortOrder
    windHailDetail?: SortOrder
    minDwelling?: SortOrder
    constructionNote?: SortOrder
    maxProtectionClass?: SortOrder
    uwNotes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarrierCountyAvgOrderByAggregateInput = {
    id?: SortOrder
    carrierId?: SortOrder
    countyId?: SortOrder
    minDwelling?: SortOrder
    maxProtectionClass?: SortOrder
  }

  export type CarrierCountyMaxOrderByAggregateInput = {
    id?: SortOrder
    carrierId?: SortOrder
    countyId?: SortOrder
    appetiteLevel?: SortOrder
    windHailStance?: SortOrder
    windHailDetail?: SortOrder
    minDwelling?: SortOrder
    constructionNote?: SortOrder
    maxProtectionClass?: SortOrder
    uwNotes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarrierCountyMinOrderByAggregateInput = {
    id?: SortOrder
    carrierId?: SortOrder
    countyId?: SortOrder
    appetiteLevel?: SortOrder
    windHailStance?: SortOrder
    windHailDetail?: SortOrder
    minDwelling?: SortOrder
    constructionNote?: SortOrder
    maxProtectionClass?: SortOrder
    uwNotes?: SortOrder
    updatedAt?: SortOrder
  }

  export type CarrierCountySumOrderByAggregateInput = {
    id?: SortOrder
    carrierId?: SortOrder
    countyId?: SortOrder
    minDwelling?: SortOrder
    maxProtectionClass?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CarrierCountyCreateNestedManyWithoutCountyInput = {
    create?: XOR<CarrierCountyCreateWithoutCountyInput, CarrierCountyUncheckedCreateWithoutCountyInput> | CarrierCountyCreateWithoutCountyInput[] | CarrierCountyUncheckedCreateWithoutCountyInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCountyInput | CarrierCountyCreateOrConnectWithoutCountyInput[]
    createMany?: CarrierCountyCreateManyCountyInputEnvelope
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
  }

  export type CarrierCountyUncheckedCreateNestedManyWithoutCountyInput = {
    create?: XOR<CarrierCountyCreateWithoutCountyInput, CarrierCountyUncheckedCreateWithoutCountyInput> | CarrierCountyCreateWithoutCountyInput[] | CarrierCountyUncheckedCreateWithoutCountyInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCountyInput | CarrierCountyCreateOrConnectWithoutCountyInput[]
    createMany?: CarrierCountyCreateManyCountyInputEnvelope
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CarrierCountyUpdateManyWithoutCountyNestedInput = {
    create?: XOR<CarrierCountyCreateWithoutCountyInput, CarrierCountyUncheckedCreateWithoutCountyInput> | CarrierCountyCreateWithoutCountyInput[] | CarrierCountyUncheckedCreateWithoutCountyInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCountyInput | CarrierCountyCreateOrConnectWithoutCountyInput[]
    upsert?: CarrierCountyUpsertWithWhereUniqueWithoutCountyInput | CarrierCountyUpsertWithWhereUniqueWithoutCountyInput[]
    createMany?: CarrierCountyCreateManyCountyInputEnvelope
    set?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    disconnect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    delete?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    update?: CarrierCountyUpdateWithWhereUniqueWithoutCountyInput | CarrierCountyUpdateWithWhereUniqueWithoutCountyInput[]
    updateMany?: CarrierCountyUpdateManyWithWhereWithoutCountyInput | CarrierCountyUpdateManyWithWhereWithoutCountyInput[]
    deleteMany?: CarrierCountyScalarWhereInput | CarrierCountyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CarrierCountyUncheckedUpdateManyWithoutCountyNestedInput = {
    create?: XOR<CarrierCountyCreateWithoutCountyInput, CarrierCountyUncheckedCreateWithoutCountyInput> | CarrierCountyCreateWithoutCountyInput[] | CarrierCountyUncheckedCreateWithoutCountyInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCountyInput | CarrierCountyCreateOrConnectWithoutCountyInput[]
    upsert?: CarrierCountyUpsertWithWhereUniqueWithoutCountyInput | CarrierCountyUpsertWithWhereUniqueWithoutCountyInput[]
    createMany?: CarrierCountyCreateManyCountyInputEnvelope
    set?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    disconnect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    delete?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    update?: CarrierCountyUpdateWithWhereUniqueWithoutCountyInput | CarrierCountyUpdateWithWhereUniqueWithoutCountyInput[]
    updateMany?: CarrierCountyUpdateManyWithWhereWithoutCountyInput | CarrierCountyUpdateManyWithWhereWithoutCountyInput[]
    deleteMany?: CarrierCountyScalarWhereInput | CarrierCountyScalarWhereInput[]
  }

  export type CarrierCountyCreateNestedManyWithoutCarrierInput = {
    create?: XOR<CarrierCountyCreateWithoutCarrierInput, CarrierCountyUncheckedCreateWithoutCarrierInput> | CarrierCountyCreateWithoutCarrierInput[] | CarrierCountyUncheckedCreateWithoutCarrierInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCarrierInput | CarrierCountyCreateOrConnectWithoutCarrierInput[]
    createMany?: CarrierCountyCreateManyCarrierInputEnvelope
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
  }

  export type CarrierCountyUncheckedCreateNestedManyWithoutCarrierInput = {
    create?: XOR<CarrierCountyCreateWithoutCarrierInput, CarrierCountyUncheckedCreateWithoutCarrierInput> | CarrierCountyCreateWithoutCarrierInput[] | CarrierCountyUncheckedCreateWithoutCarrierInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCarrierInput | CarrierCountyCreateOrConnectWithoutCarrierInput[]
    createMany?: CarrierCountyCreateManyCarrierInputEnvelope
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CarrierCountyUpdateManyWithoutCarrierNestedInput = {
    create?: XOR<CarrierCountyCreateWithoutCarrierInput, CarrierCountyUncheckedCreateWithoutCarrierInput> | CarrierCountyCreateWithoutCarrierInput[] | CarrierCountyUncheckedCreateWithoutCarrierInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCarrierInput | CarrierCountyCreateOrConnectWithoutCarrierInput[]
    upsert?: CarrierCountyUpsertWithWhereUniqueWithoutCarrierInput | CarrierCountyUpsertWithWhereUniqueWithoutCarrierInput[]
    createMany?: CarrierCountyCreateManyCarrierInputEnvelope
    set?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    disconnect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    delete?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    update?: CarrierCountyUpdateWithWhereUniqueWithoutCarrierInput | CarrierCountyUpdateWithWhereUniqueWithoutCarrierInput[]
    updateMany?: CarrierCountyUpdateManyWithWhereWithoutCarrierInput | CarrierCountyUpdateManyWithWhereWithoutCarrierInput[]
    deleteMany?: CarrierCountyScalarWhereInput | CarrierCountyScalarWhereInput[]
  }

  export type CarrierCountyUncheckedUpdateManyWithoutCarrierNestedInput = {
    create?: XOR<CarrierCountyCreateWithoutCarrierInput, CarrierCountyUncheckedCreateWithoutCarrierInput> | CarrierCountyCreateWithoutCarrierInput[] | CarrierCountyUncheckedCreateWithoutCarrierInput[]
    connectOrCreate?: CarrierCountyCreateOrConnectWithoutCarrierInput | CarrierCountyCreateOrConnectWithoutCarrierInput[]
    upsert?: CarrierCountyUpsertWithWhereUniqueWithoutCarrierInput | CarrierCountyUpsertWithWhereUniqueWithoutCarrierInput[]
    createMany?: CarrierCountyCreateManyCarrierInputEnvelope
    set?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    disconnect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    delete?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    connect?: CarrierCountyWhereUniqueInput | CarrierCountyWhereUniqueInput[]
    update?: CarrierCountyUpdateWithWhereUniqueWithoutCarrierInput | CarrierCountyUpdateWithWhereUniqueWithoutCarrierInput[]
    updateMany?: CarrierCountyUpdateManyWithWhereWithoutCarrierInput | CarrierCountyUpdateManyWithWhereWithoutCarrierInput[]
    deleteMany?: CarrierCountyScalarWhereInput | CarrierCountyScalarWhereInput[]
  }

  export type CarrierCreateNestedOneWithoutCountiesInput = {
    create?: XOR<CarrierCreateWithoutCountiesInput, CarrierUncheckedCreateWithoutCountiesInput>
    connectOrCreate?: CarrierCreateOrConnectWithoutCountiesInput
    connect?: CarrierWhereUniqueInput
  }

  export type CountyCreateNestedOneWithoutCarriersInput = {
    create?: XOR<CountyCreateWithoutCarriersInput, CountyUncheckedCreateWithoutCarriersInput>
    connectOrCreate?: CountyCreateOrConnectWithoutCarriersInput
    connect?: CountyWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CarrierUpdateOneRequiredWithoutCountiesNestedInput = {
    create?: XOR<CarrierCreateWithoutCountiesInput, CarrierUncheckedCreateWithoutCountiesInput>
    connectOrCreate?: CarrierCreateOrConnectWithoutCountiesInput
    upsert?: CarrierUpsertWithoutCountiesInput
    connect?: CarrierWhereUniqueInput
    update?: XOR<XOR<CarrierUpdateToOneWithWhereWithoutCountiesInput, CarrierUpdateWithoutCountiesInput>, CarrierUncheckedUpdateWithoutCountiesInput>
  }

  export type CountyUpdateOneRequiredWithoutCarriersNestedInput = {
    create?: XOR<CountyCreateWithoutCarriersInput, CountyUncheckedCreateWithoutCarriersInput>
    connectOrCreate?: CountyCreateOrConnectWithoutCarriersInput
    upsert?: CountyUpsertWithoutCarriersInput
    connect?: CountyWhereUniqueInput
    update?: XOR<XOR<CountyUpdateToOneWithWhereWithoutCarriersInput, CountyUpdateWithoutCarriersInput>, CountyUncheckedUpdateWithoutCarriersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CarrierCountyCreateWithoutCountyInput = {
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
    carrier: CarrierCreateNestedOneWithoutCountiesInput
  }

  export type CarrierCountyUncheckedCreateWithoutCountyInput = {
    id?: number
    carrierId: number
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
  }

  export type CarrierCountyCreateOrConnectWithoutCountyInput = {
    where: CarrierCountyWhereUniqueInput
    create: XOR<CarrierCountyCreateWithoutCountyInput, CarrierCountyUncheckedCreateWithoutCountyInput>
  }

  export type CarrierCountyCreateManyCountyInputEnvelope = {
    data: CarrierCountyCreateManyCountyInput | CarrierCountyCreateManyCountyInput[]
    skipDuplicates?: boolean
  }

  export type CarrierCountyUpsertWithWhereUniqueWithoutCountyInput = {
    where: CarrierCountyWhereUniqueInput
    update: XOR<CarrierCountyUpdateWithoutCountyInput, CarrierCountyUncheckedUpdateWithoutCountyInput>
    create: XOR<CarrierCountyCreateWithoutCountyInput, CarrierCountyUncheckedCreateWithoutCountyInput>
  }

  export type CarrierCountyUpdateWithWhereUniqueWithoutCountyInput = {
    where: CarrierCountyWhereUniqueInput
    data: XOR<CarrierCountyUpdateWithoutCountyInput, CarrierCountyUncheckedUpdateWithoutCountyInput>
  }

  export type CarrierCountyUpdateManyWithWhereWithoutCountyInput = {
    where: CarrierCountyScalarWhereInput
    data: XOR<CarrierCountyUpdateManyMutationInput, CarrierCountyUncheckedUpdateManyWithoutCountyInput>
  }

  export type CarrierCountyScalarWhereInput = {
    AND?: CarrierCountyScalarWhereInput | CarrierCountyScalarWhereInput[]
    OR?: CarrierCountyScalarWhereInput[]
    NOT?: CarrierCountyScalarWhereInput | CarrierCountyScalarWhereInput[]
    id?: IntFilter<"CarrierCounty"> | number
    carrierId?: IntFilter<"CarrierCounty"> | number
    countyId?: IntFilter<"CarrierCounty"> | number
    appetiteLevel?: StringFilter<"CarrierCounty"> | string
    windHailStance?: StringFilter<"CarrierCounty"> | string
    windHailDetail?: StringNullableFilter<"CarrierCounty"> | string | null
    minDwelling?: IntNullableFilter<"CarrierCounty"> | number | null
    constructionNote?: StringNullableFilter<"CarrierCounty"> | string | null
    maxProtectionClass?: IntNullableFilter<"CarrierCounty"> | number | null
    uwNotes?: StringNullableFilter<"CarrierCounty"> | string | null
    updatedAt?: DateTimeFilter<"CarrierCounty"> | Date | string
  }

  export type CarrierCountyCreateWithoutCarrierInput = {
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
    county: CountyCreateNestedOneWithoutCarriersInput
  }

  export type CarrierCountyUncheckedCreateWithoutCarrierInput = {
    id?: number
    countyId: number
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
  }

  export type CarrierCountyCreateOrConnectWithoutCarrierInput = {
    where: CarrierCountyWhereUniqueInput
    create: XOR<CarrierCountyCreateWithoutCarrierInput, CarrierCountyUncheckedCreateWithoutCarrierInput>
  }

  export type CarrierCountyCreateManyCarrierInputEnvelope = {
    data: CarrierCountyCreateManyCarrierInput | CarrierCountyCreateManyCarrierInput[]
    skipDuplicates?: boolean
  }

  export type CarrierCountyUpsertWithWhereUniqueWithoutCarrierInput = {
    where: CarrierCountyWhereUniqueInput
    update: XOR<CarrierCountyUpdateWithoutCarrierInput, CarrierCountyUncheckedUpdateWithoutCarrierInput>
    create: XOR<CarrierCountyCreateWithoutCarrierInput, CarrierCountyUncheckedCreateWithoutCarrierInput>
  }

  export type CarrierCountyUpdateWithWhereUniqueWithoutCarrierInput = {
    where: CarrierCountyWhereUniqueInput
    data: XOR<CarrierCountyUpdateWithoutCarrierInput, CarrierCountyUncheckedUpdateWithoutCarrierInput>
  }

  export type CarrierCountyUpdateManyWithWhereWithoutCarrierInput = {
    where: CarrierCountyScalarWhereInput
    data: XOR<CarrierCountyUpdateManyMutationInput, CarrierCountyUncheckedUpdateManyWithoutCarrierInput>
  }

  export type CarrierCreateWithoutCountiesInput = {
    name: string
    rating: string
    type?: string
    website?: string | null
  }

  export type CarrierUncheckedCreateWithoutCountiesInput = {
    id?: number
    name: string
    rating: string
    type?: string
    website?: string | null
  }

  export type CarrierCreateOrConnectWithoutCountiesInput = {
    where: CarrierWhereUniqueInput
    create: XOR<CarrierCreateWithoutCountiesInput, CarrierUncheckedCreateWithoutCountiesInput>
  }

  export type CountyCreateWithoutCarriersInput = {
    name: string
    isBeachPlan?: boolean
  }

  export type CountyUncheckedCreateWithoutCarriersInput = {
    id?: number
    name: string
    isBeachPlan?: boolean
  }

  export type CountyCreateOrConnectWithoutCarriersInput = {
    where: CountyWhereUniqueInput
    create: XOR<CountyCreateWithoutCarriersInput, CountyUncheckedCreateWithoutCarriersInput>
  }

  export type CarrierUpsertWithoutCountiesInput = {
    update: XOR<CarrierUpdateWithoutCountiesInput, CarrierUncheckedUpdateWithoutCountiesInput>
    create: XOR<CarrierCreateWithoutCountiesInput, CarrierUncheckedCreateWithoutCountiesInput>
    where?: CarrierWhereInput
  }

  export type CarrierUpdateToOneWithWhereWithoutCountiesInput = {
    where?: CarrierWhereInput
    data: XOR<CarrierUpdateWithoutCountiesInput, CarrierUncheckedUpdateWithoutCountiesInput>
  }

  export type CarrierUpdateWithoutCountiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CarrierUncheckedUpdateWithoutCountiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountyUpsertWithoutCarriersInput = {
    update: XOR<CountyUpdateWithoutCarriersInput, CountyUncheckedUpdateWithoutCarriersInput>
    create: XOR<CountyCreateWithoutCarriersInput, CountyUncheckedCreateWithoutCarriersInput>
    where?: CountyWhereInput
  }

  export type CountyUpdateToOneWithWhereWithoutCarriersInput = {
    where?: CountyWhereInput
    data: XOR<CountyUpdateWithoutCarriersInput, CountyUncheckedUpdateWithoutCarriersInput>
  }

  export type CountyUpdateWithoutCarriersInput = {
    name?: StringFieldUpdateOperationsInput | string
    isBeachPlan?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CountyUncheckedUpdateWithoutCarriersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isBeachPlan?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CarrierCountyCreateManyCountyInput = {
    id?: number
    carrierId: number
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
  }

  export type CarrierCountyUpdateWithoutCountyInput = {
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carrier?: CarrierUpdateOneRequiredWithoutCountiesNestedInput
  }

  export type CarrierCountyUncheckedUpdateWithoutCountyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrierId?: IntFieldUpdateOperationsInput | number
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrierCountyUncheckedUpdateManyWithoutCountyInput = {
    id?: IntFieldUpdateOperationsInput | number
    carrierId?: IntFieldUpdateOperationsInput | number
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrierCountyCreateManyCarrierInput = {
    id?: number
    countyId: number
    appetiteLevel: string
    windHailStance: string
    windHailDetail?: string | null
    minDwelling?: number | null
    constructionNote?: string | null
    maxProtectionClass?: number | null
    uwNotes?: string | null
    updatedAt?: Date | string
  }

  export type CarrierCountyUpdateWithoutCarrierInput = {
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    county?: CountyUpdateOneRequiredWithoutCarriersNestedInput
  }

  export type CarrierCountyUncheckedUpdateWithoutCarrierInput = {
    id?: IntFieldUpdateOperationsInput | number
    countyId?: IntFieldUpdateOperationsInput | number
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarrierCountyUncheckedUpdateManyWithoutCarrierInput = {
    id?: IntFieldUpdateOperationsInput | number
    countyId?: IntFieldUpdateOperationsInput | number
    appetiteLevel?: StringFieldUpdateOperationsInput | string
    windHailStance?: StringFieldUpdateOperationsInput | string
    windHailDetail?: NullableStringFieldUpdateOperationsInput | string | null
    minDwelling?: NullableIntFieldUpdateOperationsInput | number | null
    constructionNote?: NullableStringFieldUpdateOperationsInput | string | null
    maxProtectionClass?: NullableIntFieldUpdateOperationsInput | number | null
    uwNotes?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}