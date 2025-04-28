
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model CreditCard
 * 
 */
export type CreditCard = $Result.DefaultSelection<Prisma.$CreditCardPayload>
/**
 * Model Benefit
 * 
 */
export type Benefit = $Result.DefaultSelection<Prisma.$BenefitPayload>
/**
 * Model PredefinedCard
 * 
 */
export type PredefinedCard = $Result.DefaultSelection<Prisma.$PredefinedCardPayload>
/**
 * Model PredefinedBenefit
 * 
 */
export type PredefinedBenefit = $Result.DefaultSelection<Prisma.$PredefinedBenefitPayload>
/**
 * Model BenefitStatus
 * 
 */
export type BenefitStatus = $Result.DefaultSelection<Prisma.$BenefitStatusPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BenefitFrequency: {
  MONTHLY: 'MONTHLY',
  QUARTERLY: 'QUARTERLY',
  YEARLY: 'YEARLY',
  ONE_TIME: 'ONE_TIME'
};

export type BenefitFrequency = (typeof BenefitFrequency)[keyof typeof BenefitFrequency]

}

export type BenefitFrequency = $Enums.BenefitFrequency

export const BenefitFrequency: typeof $Enums.BenefitFrequency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creditCard`: Exposes CRUD operations for the **CreditCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditCards
    * const creditCards = await prisma.creditCard.findMany()
    * ```
    */
  get creditCard(): Prisma.CreditCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.benefit`: Exposes CRUD operations for the **Benefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Benefits
    * const benefits = await prisma.benefit.findMany()
    * ```
    */
  get benefit(): Prisma.BenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.predefinedCard`: Exposes CRUD operations for the **PredefinedCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PredefinedCards
    * const predefinedCards = await prisma.predefinedCard.findMany()
    * ```
    */
  get predefinedCard(): Prisma.PredefinedCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.predefinedBenefit`: Exposes CRUD operations for the **PredefinedBenefit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PredefinedBenefits
    * const predefinedBenefits = await prisma.predefinedBenefit.findMany()
    * ```
    */
  get predefinedBenefit(): Prisma.PredefinedBenefitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.benefitStatus`: Exposes CRUD operations for the **BenefitStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BenefitStatuses
    * const benefitStatuses = await prisma.benefitStatus.findMany()
    * ```
    */
  get benefitStatus(): Prisma.BenefitStatusDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    CreditCard: 'CreditCard',
    Benefit: 'Benefit',
    PredefinedCard: 'PredefinedCard',
    PredefinedBenefit: 'PredefinedBenefit',
    BenefitStatus: 'BenefitStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "creditCard" | "benefit" | "predefinedCard" | "predefinedBenefit" | "benefitStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      CreditCard: {
        payload: Prisma.$CreditCardPayload<ExtArgs>
        fields: Prisma.CreditCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findFirst: {
            args: Prisma.CreditCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findMany: {
            args: Prisma.CreditCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          create: {
            args: Prisma.CreditCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          createMany: {
            args: Prisma.CreditCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          delete: {
            args: Prisma.CreditCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          update: {
            args: Prisma.CreditCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          deleteMany: {
            args: Prisma.CreditCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CreditCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          upsert: {
            args: Prisma.CreditCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          aggregate: {
            args: Prisma.CreditCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditCard>
          }
          groupBy: {
            args: Prisma.CreditCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCardCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCardCountAggregateOutputType> | number
          }
        }
      }
      Benefit: {
        payload: Prisma.$BenefitPayload<ExtArgs>
        fields: Prisma.BenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findFirst: {
            args: Prisma.BenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          findMany: {
            args: Prisma.BenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          create: {
            args: Prisma.BenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          createMany: {
            args: Prisma.BenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          delete: {
            args: Prisma.BenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          update: {
            args: Prisma.BenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          deleteMany: {
            args: Prisma.BenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>[]
          }
          upsert: {
            args: Prisma.BenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitPayload>
          }
          aggregate: {
            args: Prisma.BenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefit>
          }
          groupBy: {
            args: Prisma.BenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitCountAggregateOutputType> | number
          }
        }
      }
      PredefinedCard: {
        payload: Prisma.$PredefinedCardPayload<ExtArgs>
        fields: Prisma.PredefinedCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredefinedCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredefinedCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>
          }
          findFirst: {
            args: Prisma.PredefinedCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredefinedCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>
          }
          findMany: {
            args: Prisma.PredefinedCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>[]
          }
          create: {
            args: Prisma.PredefinedCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>
          }
          createMany: {
            args: Prisma.PredefinedCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredefinedCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>[]
          }
          delete: {
            args: Prisma.PredefinedCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>
          }
          update: {
            args: Prisma.PredefinedCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>
          }
          deleteMany: {
            args: Prisma.PredefinedCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredefinedCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredefinedCardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>[]
          }
          upsert: {
            args: Prisma.PredefinedCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedCardPayload>
          }
          aggregate: {
            args: Prisma.PredefinedCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePredefinedCard>
          }
          groupBy: {
            args: Prisma.PredefinedCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredefinedCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredefinedCardCountArgs<ExtArgs>
            result: $Utils.Optional<PredefinedCardCountAggregateOutputType> | number
          }
        }
      }
      PredefinedBenefit: {
        payload: Prisma.$PredefinedBenefitPayload<ExtArgs>
        fields: Prisma.PredefinedBenefitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredefinedBenefitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredefinedBenefitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>
          }
          findFirst: {
            args: Prisma.PredefinedBenefitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredefinedBenefitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>
          }
          findMany: {
            args: Prisma.PredefinedBenefitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>[]
          }
          create: {
            args: Prisma.PredefinedBenefitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>
          }
          createMany: {
            args: Prisma.PredefinedBenefitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredefinedBenefitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>[]
          }
          delete: {
            args: Prisma.PredefinedBenefitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>
          }
          update: {
            args: Prisma.PredefinedBenefitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>
          }
          deleteMany: {
            args: Prisma.PredefinedBenefitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredefinedBenefitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredefinedBenefitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>[]
          }
          upsert: {
            args: Prisma.PredefinedBenefitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredefinedBenefitPayload>
          }
          aggregate: {
            args: Prisma.PredefinedBenefitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePredefinedBenefit>
          }
          groupBy: {
            args: Prisma.PredefinedBenefitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredefinedBenefitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredefinedBenefitCountArgs<ExtArgs>
            result: $Utils.Optional<PredefinedBenefitCountAggregateOutputType> | number
          }
        }
      }
      BenefitStatus: {
        payload: Prisma.$BenefitStatusPayload<ExtArgs>
        fields: Prisma.BenefitStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BenefitStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BenefitStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>
          }
          findFirst: {
            args: Prisma.BenefitStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BenefitStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>
          }
          findMany: {
            args: Prisma.BenefitStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>[]
          }
          create: {
            args: Prisma.BenefitStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>
          }
          createMany: {
            args: Prisma.BenefitStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BenefitStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>[]
          }
          delete: {
            args: Prisma.BenefitStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>
          }
          update: {
            args: Prisma.BenefitStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>
          }
          deleteMany: {
            args: Prisma.BenefitStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BenefitStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BenefitStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>[]
          }
          upsert: {
            args: Prisma.BenefitStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BenefitStatusPayload>
          }
          aggregate: {
            args: Prisma.BenefitStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBenefitStatus>
          }
          groupBy: {
            args: Prisma.BenefitStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BenefitStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BenefitStatusCountArgs<ExtArgs>
            result: $Utils.Optional<BenefitStatusCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    creditCard?: CreditCardOmit
    benefit?: BenefitOmit
    predefinedCard?: PredefinedCardOmit
    predefinedBenefit?: PredefinedBenefitOmit
    benefitStatus?: BenefitStatusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    creditCards: number
    accounts: number
    sessions: number
    benefitStatuses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCards?: boolean | UserCountOutputTypeCountCreditCardsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    benefitStatuses?: boolean | UserCountOutputTypeCountBenefitStatusesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBenefitStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitStatusWhereInput
  }


  /**
   * Count Type CreditCardCountOutputType
   */

  export type CreditCardCountOutputType = {
    benefits: number
  }

  export type CreditCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | CreditCardCountOutputTypeCountBenefitsArgs
  }

  // Custom InputTypes
  /**
   * CreditCardCountOutputType without action
   */
  export type CreditCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCardCountOutputType
     */
    select?: CreditCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreditCardCountOutputType without action
   */
  export type CreditCardCountOutputTypeCountBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
  }


  /**
   * Count Type BenefitCountOutputType
   */

  export type BenefitCountOutputType = {
    benefitStatuses: number
  }

  export type BenefitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefitStatuses?: boolean | BenefitCountOutputTypeCountBenefitStatusesArgs
  }

  // Custom InputTypes
  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitCountOutputType
     */
    select?: BenefitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BenefitCountOutputType without action
   */
  export type BenefitCountOutputTypeCountBenefitStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitStatusWhereInput
  }


  /**
   * Count Type PredefinedCardCountOutputType
   */

  export type PredefinedCardCountOutputType = {
    benefits: number
  }

  export type PredefinedCardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | PredefinedCardCountOutputTypeCountBenefitsArgs
  }

  // Custom InputTypes
  /**
   * PredefinedCardCountOutputType without action
   */
  export type PredefinedCardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCardCountOutputType
     */
    select?: PredefinedCardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PredefinedCardCountOutputType without action
   */
  export type PredefinedCardCountOutputTypeCountBenefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredefinedBenefitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    notifyExpirationDays: number | null
  }

  export type UserSumAggregateOutputType = {
    notifyExpirationDays: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    notifyNewBenefit: boolean | null
    notifyBenefitExpiration: boolean | null
    notifyExpirationDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    notifyNewBenefit: boolean | null
    notifyBenefitExpiration: boolean | null
    notifyExpirationDays: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    notifyNewBenefit: number
    notifyBenefitExpiration: number
    notifyExpirationDays: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    notifyExpirationDays?: true
  }

  export type UserSumAggregateInputType = {
    notifyExpirationDays?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    notifyNewBenefit?: true
    notifyBenefitExpiration?: true
    notifyExpirationDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    notifyNewBenefit?: true
    notifyBenefitExpiration?: true
    notifyExpirationDays?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    notifyNewBenefit?: true
    notifyBenefitExpiration?: true
    notifyExpirationDays?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    notifyNewBenefit: boolean
    notifyBenefitExpiration: boolean
    notifyExpirationDays: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditCards?: boolean | User$creditCardsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    benefitStatuses?: boolean | User$benefitStatusesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "notifyNewBenefit" | "notifyBenefitExpiration" | "notifyExpirationDays" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCards?: boolean | User$creditCardsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    benefitStatuses?: boolean | User$benefitStatusesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      creditCards: Prisma.$CreditCardPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      benefitStatuses: Prisma.$BenefitStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      notifyNewBenefit: boolean
      notifyBenefitExpiration: boolean
      notifyExpirationDays: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditCards<T extends User$creditCardsArgs<ExtArgs> = {}>(args?: Subset<T, User$creditCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    benefitStatuses<T extends User$benefitStatusesArgs<ExtArgs> = {}>(args?: Subset<T, User$benefitStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly notifyNewBenefit: FieldRef<"User", 'Boolean'>
    readonly notifyBenefitExpiration: FieldRef<"User", 'Boolean'>
    readonly notifyExpirationDays: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.creditCards
   */
  export type User$creditCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    cursor?: CreditCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.benefitStatuses
   */
  export type User$benefitStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    where?: BenefitStatusWhereInput
    orderBy?: BenefitStatusOrderByWithRelationInput | BenefitStatusOrderByWithRelationInput[]
    cursor?: BenefitStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BenefitStatusScalarFieldEnum | BenefitStatusScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model CreditCard
   */

  export type AggregateCreditCard = {
    _count: CreditCardCountAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  export type CreditCardMinAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    cardNumber: string | null
    expiryDate: Date | null
    openedDate: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    cardNumber: string | null
    expiryDate: Date | null
    openedDate: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardCountAggregateOutputType = {
    id: number
    name: number
    issuer: number
    cardNumber: number
    expiryDate: number
    openedDate: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditCardMinAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    cardNumber?: true
    expiryDate?: true
    openedDate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardMaxAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    cardNumber?: true
    expiryDate?: true
    openedDate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardCountAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    cardNumber?: true
    expiryDate?: true
    openedDate?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCard to aggregate.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditCards
    **/
    _count?: true | CreditCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditCardMaxAggregateInputType
  }

  export type GetCreditCardAggregateType<T extends CreditCardAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditCard[P]>
      : GetScalarType<T[P], AggregateCreditCard[P]>
  }




  export type CreditCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithAggregationInput | CreditCardOrderByWithAggregationInput[]
    by: CreditCardScalarFieldEnum[] | CreditCardScalarFieldEnum
    having?: CreditCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCardCountAggregateInputType | true
    _min?: CreditCardMinAggregateInputType
    _max?: CreditCardMaxAggregateInputType
  }

  export type CreditCardGroupByOutputType = {
    id: string
    name: string
    issuer: string
    cardNumber: string | null
    expiryDate: Date | null
    openedDate: Date | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CreditCardCountAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  type GetCreditCardGroupByPayload<T extends CreditCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
            : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
        }
      >
    >


  export type CreditCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    cardNumber?: boolean
    expiryDate?: boolean
    openedDate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefits?: boolean | CreditCard$benefitsArgs<ExtArgs>
    _count?: boolean | CreditCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    cardNumber?: boolean
    expiryDate?: boolean
    openedDate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    cardNumber?: boolean
    expiryDate?: boolean
    openedDate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectScalar = {
    id?: boolean
    name?: boolean
    issuer?: boolean
    cardNumber?: boolean
    expiryDate?: boolean
    openedDate?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "issuer" | "cardNumber" | "expiryDate" | "openedDate" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["creditCard"]>
  export type CreditCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    benefits?: boolean | CreditCard$benefitsArgs<ExtArgs>
    _count?: boolean | CreditCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CreditCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      benefits: Prisma.$BenefitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      issuer: string
      cardNumber: string | null
      expiryDate: Date | null
      openedDate: Date | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditCard"]>
    composites: {}
  }

  type CreditCardGetPayload<S extends boolean | null | undefined | CreditCardDefaultArgs> = $Result.GetResult<Prisma.$CreditCardPayload, S>

  type CreditCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CreditCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreditCardCountAggregateInputType | true
    }

  export interface CreditCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditCard'], meta: { name: 'CreditCard' } }
    /**
     * Find zero or one CreditCard that matches the filter.
     * @param {CreditCardFindUniqueArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditCardFindUniqueArgs>(args: SelectSubset<T, CreditCardFindUniqueArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CreditCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CreditCardFindUniqueOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditCardFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditCardFindFirstArgs>(args?: SelectSubset<T, CreditCardFindFirstArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CreditCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditCardFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CreditCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditCards
     * const creditCards = await prisma.creditCard.findMany()
     * 
     * // Get first 10 CreditCards
     * const creditCards = await prisma.creditCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditCardFindManyArgs>(args?: SelectSubset<T, CreditCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CreditCard.
     * @param {CreditCardCreateArgs} args - Arguments to create a CreditCard.
     * @example
     * // Create one CreditCard
     * const CreditCard = await prisma.creditCard.create({
     *   data: {
     *     // ... data to create a CreditCard
     *   }
     * })
     * 
     */
    create<T extends CreditCardCreateArgs>(args: SelectSubset<T, CreditCardCreateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CreditCards.
     * @param {CreditCardCreateManyArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCardCreateManyArgs>(args?: SelectSubset<T, CreditCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditCards and returns the data saved in the database.
     * @param {CreditCardCreateManyAndReturnArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCardCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CreditCard.
     * @param {CreditCardDeleteArgs} args - Arguments to delete one CreditCard.
     * @example
     * // Delete one CreditCard
     * const CreditCard = await prisma.creditCard.delete({
     *   where: {
     *     // ... filter to delete one CreditCard
     *   }
     * })
     * 
     */
    delete<T extends CreditCardDeleteArgs>(args: SelectSubset<T, CreditCardDeleteArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CreditCard.
     * @param {CreditCardUpdateArgs} args - Arguments to update one CreditCard.
     * @example
     * // Update one CreditCard
     * const creditCard = await prisma.creditCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditCardUpdateArgs>(args: SelectSubset<T, CreditCardUpdateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CreditCards.
     * @param {CreditCardDeleteManyArgs} args - Arguments to filter CreditCards to delete.
     * @example
     * // Delete a few CreditCards
     * const { count } = await prisma.creditCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditCardDeleteManyArgs>(args?: SelectSubset<T, CreditCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditCardUpdateManyArgs>(args: SelectSubset<T, CreditCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards and returns the data updated in the database.
     * @param {CreditCardUpdateManyAndReturnArgs} args - Arguments to update many CreditCards.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends CreditCardUpdateManyAndReturnArgs>(args: SelectSubset<T, CreditCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CreditCard.
     * @param {CreditCardUpsertArgs} args - Arguments to update or create a CreditCard.
     * @example
     * // Update or create a CreditCard
     * const creditCard = await prisma.creditCard.upsert({
     *   create: {
     *     // ... data to create a CreditCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditCard we want to update
     *   }
     * })
     */
    upsert<T extends CreditCardUpsertArgs>(args: SelectSubset<T, CreditCardUpsertArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardCountArgs} args - Arguments to filter CreditCards to count.
     * @example
     * // Count the number of CreditCards
     * const count = await prisma.creditCard.count({
     *   where: {
     *     // ... the filter for the CreditCards we want to count
     *   }
     * })
    **/
    count<T extends CreditCardCountArgs>(
      args?: Subset<T, CreditCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditCardAggregateArgs>(args: Subset<T, CreditCardAggregateArgs>): Prisma.PrismaPromise<GetCreditCardAggregateType<T>>

    /**
     * Group by CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardGroupByArgs} args - Group by arguments.
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
      T extends CreditCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditCardGroupByArgs['orderBy'] }
        : { orderBy?: CreditCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditCard model
   */
  readonly fields: CreditCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    benefits<T extends CreditCard$benefitsArgs<ExtArgs> = {}>(args?: Subset<T, CreditCard$benefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CreditCard model
   */
  interface CreditCardFieldRefs {
    readonly id: FieldRef<"CreditCard", 'String'>
    readonly name: FieldRef<"CreditCard", 'String'>
    readonly issuer: FieldRef<"CreditCard", 'String'>
    readonly cardNumber: FieldRef<"CreditCard", 'String'>
    readonly expiryDate: FieldRef<"CreditCard", 'DateTime'>
    readonly openedDate: FieldRef<"CreditCard", 'DateTime'>
    readonly userId: FieldRef<"CreditCard", 'String'>
    readonly createdAt: FieldRef<"CreditCard", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditCard findUnique
   */
  export type CreditCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findUniqueOrThrow
   */
  export type CreditCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findFirst
   */
  export type CreditCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findFirstOrThrow
   */
  export type CreditCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findMany
   */
  export type CreditCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCards to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard create
   */
  export type CreditCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditCard.
     */
    data: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
  }

  /**
   * CreditCard createMany
   */
  export type CreditCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditCard createManyAndReturn
   */
  export type CreditCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCard update
   */
  export type CreditCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditCard.
     */
    data: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
    /**
     * Choose, which CreditCard to update.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard updateMany
   */
  export type CreditCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
  }

  /**
   * CreditCard updateManyAndReturn
   */
  export type CreditCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCard upsert
   */
  export type CreditCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditCard to update in case it exists.
     */
    where: CreditCardWhereUniqueInput
    /**
     * In case the CreditCard found by the `where` argument doesn't exist, create a new CreditCard with this data.
     */
    create: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
    /**
     * In case the CreditCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
  }

  /**
   * CreditCard delete
   */
  export type CreditCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter which CreditCard to delete.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard deleteMany
   */
  export type CreditCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCards to delete
     */
    where?: CreditCardWhereInput
    /**
     * Limit how many CreditCards to delete.
     */
    limit?: number
  }

  /**
   * CreditCard.benefits
   */
  export type CreditCard$benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    cursor?: BenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * CreditCard without action
   */
  export type CreditCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CreditCard
     */
    omit?: CreditCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
  }


  /**
   * Model Benefit
   */

  export type AggregateBenefit = {
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  export type BenefitAvgAggregateOutputType = {
    percentage: number | null
    maxAmount: number | null
  }

  export type BenefitSumAggregateOutputType = {
    percentage: number | null
    maxAmount: number | null
  }

  export type BenefitMinAggregateOutputType = {
    id: string | null
    category: string | null
    description: string | null
    percentage: number | null
    maxAmount: number | null
    startDate: Date | null
    endDate: Date | null
    frequency: $Enums.BenefitFrequency | null
    creditCardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitMaxAggregateOutputType = {
    id: string | null
    category: string | null
    description: string | null
    percentage: number | null
    maxAmount: number | null
    startDate: Date | null
    endDate: Date | null
    frequency: $Enums.BenefitFrequency | null
    creditCardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitCountAggregateOutputType = {
    id: number
    category: number
    description: number
    percentage: number
    maxAmount: number
    startDate: number
    endDate: number
    frequency: number
    creditCardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BenefitAvgAggregateInputType = {
    percentage?: true
    maxAmount?: true
  }

  export type BenefitSumAggregateInputType = {
    percentage?: true
    maxAmount?: true
  }

  export type BenefitMinAggregateInputType = {
    id?: true
    category?: true
    description?: true
    percentage?: true
    maxAmount?: true
    startDate?: true
    endDate?: true
    frequency?: true
    creditCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitMaxAggregateInputType = {
    id?: true
    category?: true
    description?: true
    percentage?: true
    maxAmount?: true
    startDate?: true
    endDate?: true
    frequency?: true
    creditCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitCountAggregateInputType = {
    id?: true
    category?: true
    description?: true
    percentage?: true
    maxAmount?: true
    startDate?: true
    endDate?: true
    frequency?: true
    creditCardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefit to aggregate.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Benefits
    **/
    _count?: true | BenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitMaxAggregateInputType
  }

  export type GetBenefitAggregateType<T extends BenefitAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefit[P]>
      : GetScalarType<T[P], AggregateBenefit[P]>
  }




  export type BenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitWhereInput
    orderBy?: BenefitOrderByWithAggregationInput | BenefitOrderByWithAggregationInput[]
    by: BenefitScalarFieldEnum[] | BenefitScalarFieldEnum
    having?: BenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitCountAggregateInputType | true
    _avg?: BenefitAvgAggregateInputType
    _sum?: BenefitSumAggregateInputType
    _min?: BenefitMinAggregateInputType
    _max?: BenefitMaxAggregateInputType
  }

  export type BenefitGroupByOutputType = {
    id: string
    category: string
    description: string
    percentage: number
    maxAmount: number | null
    startDate: Date
    endDate: Date | null
    frequency: $Enums.BenefitFrequency
    creditCardId: string
    createdAt: Date
    updatedAt: Date
    _count: BenefitCountAggregateOutputType | null
    _avg: BenefitAvgAggregateOutputType | null
    _sum: BenefitSumAggregateOutputType | null
    _min: BenefitMinAggregateOutputType | null
    _max: BenefitMaxAggregateOutputType | null
  }

  type GetBenefitGroupByPayload<T extends BenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitGroupByOutputType[P]>
        }
      >
    >


  export type BenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    creditCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
    benefitStatuses?: boolean | Benefit$benefitStatusesArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    creditCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    creditCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefit"]>

  export type BenefitSelectScalar = {
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    startDate?: boolean
    endDate?: boolean
    frequency?: boolean
    creditCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "description" | "percentage" | "maxAmount" | "startDate" | "endDate" | "frequency" | "creditCardId" | "createdAt" | "updatedAt", ExtArgs["result"]["benefit"]>
  export type BenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
    benefitStatuses?: boolean | Benefit$benefitStatusesArgs<ExtArgs>
    _count?: boolean | BenefitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }
  export type BenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creditCard?: boolean | CreditCardDefaultArgs<ExtArgs>
  }

  export type $BenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Benefit"
    objects: {
      creditCard: Prisma.$CreditCardPayload<ExtArgs>
      benefitStatuses: Prisma.$BenefitStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      description: string
      percentage: number
      maxAmount: number | null
      startDate: Date
      endDate: Date | null
      frequency: $Enums.BenefitFrequency
      creditCardId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["benefit"]>
    composites: {}
  }

  type BenefitGetPayload<S extends boolean | null | undefined | BenefitDefaultArgs> = $Result.GetResult<Prisma.$BenefitPayload, S>

  type BenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenefitCountAggregateInputType | true
    }

  export interface BenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Benefit'], meta: { name: 'Benefit' } }
    /**
     * Find zero or one Benefit that matches the filter.
     * @param {BenefitFindUniqueArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitFindUniqueArgs>(args: SelectSubset<T, BenefitFindUniqueArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Benefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BenefitFindUniqueOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitFindFirstArgs>(args?: SelectSubset<T, BenefitFindFirstArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Benefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindFirstOrThrowArgs} args - Arguments to find a Benefit
     * @example
     * // Get one Benefit
     * const benefit = await prisma.benefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Benefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Benefits
     * const benefits = await prisma.benefit.findMany()
     * 
     * // Get first 10 Benefits
     * const benefits = await prisma.benefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitWithIdOnly = await prisma.benefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitFindManyArgs>(args?: SelectSubset<T, BenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Benefit.
     * @param {BenefitCreateArgs} args - Arguments to create a Benefit.
     * @example
     * // Create one Benefit
     * const Benefit = await prisma.benefit.create({
     *   data: {
     *     // ... data to create a Benefit
     *   }
     * })
     * 
     */
    create<T extends BenefitCreateArgs>(args: SelectSubset<T, BenefitCreateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Benefits.
     * @param {BenefitCreateManyArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitCreateManyArgs>(args?: SelectSubset<T, BenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Benefits and returns the data saved in the database.
     * @param {BenefitCreateManyAndReturnArgs} args - Arguments to create many Benefits.
     * @example
     * // Create many Benefits
     * const benefit = await prisma.benefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Benefit.
     * @param {BenefitDeleteArgs} args - Arguments to delete one Benefit.
     * @example
     * // Delete one Benefit
     * const Benefit = await prisma.benefit.delete({
     *   where: {
     *     // ... filter to delete one Benefit
     *   }
     * })
     * 
     */
    delete<T extends BenefitDeleteArgs>(args: SelectSubset<T, BenefitDeleteArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Benefit.
     * @param {BenefitUpdateArgs} args - Arguments to update one Benefit.
     * @example
     * // Update one Benefit
     * const benefit = await prisma.benefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitUpdateArgs>(args: SelectSubset<T, BenefitUpdateArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Benefits.
     * @param {BenefitDeleteManyArgs} args - Arguments to filter Benefits to delete.
     * @example
     * // Delete a few Benefits
     * const { count } = await prisma.benefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitDeleteManyArgs>(args?: SelectSubset<T, BenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitUpdateManyArgs>(args: SelectSubset<T, BenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Benefits and returns the data updated in the database.
     * @param {BenefitUpdateManyAndReturnArgs} args - Arguments to update many Benefits.
     * @example
     * // Update many Benefits
     * const benefit = await prisma.benefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Benefits and only return the `id`
     * const benefitWithIdOnly = await prisma.benefit.updateManyAndReturn({
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
    updateManyAndReturn<T extends BenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, BenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Benefit.
     * @param {BenefitUpsertArgs} args - Arguments to update or create a Benefit.
     * @example
     * // Update or create a Benefit
     * const benefit = await prisma.benefit.upsert({
     *   create: {
     *     // ... data to create a Benefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Benefit we want to update
     *   }
     * })
     */
    upsert<T extends BenefitUpsertArgs>(args: SelectSubset<T, BenefitUpsertArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Benefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitCountArgs} args - Arguments to filter Benefits to count.
     * @example
     * // Count the number of Benefits
     * const count = await prisma.benefit.count({
     *   where: {
     *     // ... the filter for the Benefits we want to count
     *   }
     * })
    **/
    count<T extends BenefitCountArgs>(
      args?: Subset<T, BenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BenefitAggregateArgs>(args: Subset<T, BenefitAggregateArgs>): Prisma.PrismaPromise<GetBenefitAggregateType<T>>

    /**
     * Group by Benefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitGroupByArgs} args - Group by arguments.
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
      T extends BenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitGroupByArgs['orderBy'] }
        : { orderBy?: BenefitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Benefit model
   */
  readonly fields: BenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Benefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creditCard<T extends CreditCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CreditCardDefaultArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    benefitStatuses<T extends Benefit$benefitStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Benefit$benefitStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Benefit model
   */
  interface BenefitFieldRefs {
    readonly id: FieldRef<"Benefit", 'String'>
    readonly category: FieldRef<"Benefit", 'String'>
    readonly description: FieldRef<"Benefit", 'String'>
    readonly percentage: FieldRef<"Benefit", 'Float'>
    readonly maxAmount: FieldRef<"Benefit", 'Float'>
    readonly startDate: FieldRef<"Benefit", 'DateTime'>
    readonly endDate: FieldRef<"Benefit", 'DateTime'>
    readonly frequency: FieldRef<"Benefit", 'BenefitFrequency'>
    readonly creditCardId: FieldRef<"Benefit", 'String'>
    readonly createdAt: FieldRef<"Benefit", 'DateTime'>
    readonly updatedAt: FieldRef<"Benefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Benefit findUnique
   */
  export type BenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findUniqueOrThrow
   */
  export type BenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit findFirst
   */
  export type BenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findFirstOrThrow
   */
  export type BenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefit to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Benefits.
     */
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit findMany
   */
  export type BenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter, which Benefits to fetch.
     */
    where?: BenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Benefits to fetch.
     */
    orderBy?: BenefitOrderByWithRelationInput | BenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Benefits.
     */
    cursor?: BenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Benefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Benefits.
     */
    skip?: number
    distinct?: BenefitScalarFieldEnum | BenefitScalarFieldEnum[]
  }

  /**
   * Benefit create
   */
  export type BenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a Benefit.
     */
    data: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
  }

  /**
   * Benefit createMany
   */
  export type BenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Benefit createManyAndReturn
   */
  export type BenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to create many Benefits.
     */
    data: BenefitCreateManyInput | BenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Benefit update
   */
  export type BenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a Benefit.
     */
    data: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
    /**
     * Choose, which Benefit to update.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit updateMany
   */
  export type BenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
  }

  /**
   * Benefit updateManyAndReturn
   */
  export type BenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * The data used to update Benefits.
     */
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyInput>
    /**
     * Filter which Benefits to update
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Benefit upsert
   */
  export type BenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the Benefit to update in case it exists.
     */
    where: BenefitWhereUniqueInput
    /**
     * In case the Benefit found by the `where` argument doesn't exist, create a new Benefit with this data.
     */
    create: XOR<BenefitCreateInput, BenefitUncheckedCreateInput>
    /**
     * In case the Benefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitUpdateInput, BenefitUncheckedUpdateInput>
  }

  /**
   * Benefit delete
   */
  export type BenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
    /**
     * Filter which Benefit to delete.
     */
    where: BenefitWhereUniqueInput
  }

  /**
   * Benefit deleteMany
   */
  export type BenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Benefits to delete
     */
    where?: BenefitWhereInput
    /**
     * Limit how many Benefits to delete.
     */
    limit?: number
  }

  /**
   * Benefit.benefitStatuses
   */
  export type Benefit$benefitStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    where?: BenefitStatusWhereInput
    orderBy?: BenefitStatusOrderByWithRelationInput | BenefitStatusOrderByWithRelationInput[]
    cursor?: BenefitStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BenefitStatusScalarFieldEnum | BenefitStatusScalarFieldEnum[]
  }

  /**
   * Benefit without action
   */
  export type BenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Benefit
     */
    select?: BenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Benefit
     */
    omit?: BenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitInclude<ExtArgs> | null
  }


  /**
   * Model PredefinedCard
   */

  export type AggregatePredefinedCard = {
    _count: PredefinedCardCountAggregateOutputType | null
    _avg: PredefinedCardAvgAggregateOutputType | null
    _sum: PredefinedCardSumAggregateOutputType | null
    _min: PredefinedCardMinAggregateOutputType | null
    _max: PredefinedCardMaxAggregateOutputType | null
  }

  export type PredefinedCardAvgAggregateOutputType = {
    annualFee: number | null
  }

  export type PredefinedCardSumAggregateOutputType = {
    annualFee: number | null
  }

  export type PredefinedCardMinAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    annualFee: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredefinedCardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    annualFee: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredefinedCardCountAggregateOutputType = {
    id: number
    name: number
    issuer: number
    annualFee: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PredefinedCardAvgAggregateInputType = {
    annualFee?: true
  }

  export type PredefinedCardSumAggregateInputType = {
    annualFee?: true
  }

  export type PredefinedCardMinAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    annualFee?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredefinedCardMaxAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    annualFee?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredefinedCardCountAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    annualFee?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PredefinedCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredefinedCard to aggregate.
     */
    where?: PredefinedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedCards to fetch.
     */
    orderBy?: PredefinedCardOrderByWithRelationInput | PredefinedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredefinedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PredefinedCards
    **/
    _count?: true | PredefinedCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredefinedCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredefinedCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredefinedCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredefinedCardMaxAggregateInputType
  }

  export type GetPredefinedCardAggregateType<T extends PredefinedCardAggregateArgs> = {
        [P in keyof T & keyof AggregatePredefinedCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePredefinedCard[P]>
      : GetScalarType<T[P], AggregatePredefinedCard[P]>
  }




  export type PredefinedCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredefinedCardWhereInput
    orderBy?: PredefinedCardOrderByWithAggregationInput | PredefinedCardOrderByWithAggregationInput[]
    by: PredefinedCardScalarFieldEnum[] | PredefinedCardScalarFieldEnum
    having?: PredefinedCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredefinedCardCountAggregateInputType | true
    _avg?: PredefinedCardAvgAggregateInputType
    _sum?: PredefinedCardSumAggregateInputType
    _min?: PredefinedCardMinAggregateInputType
    _max?: PredefinedCardMaxAggregateInputType
  }

  export type PredefinedCardGroupByOutputType = {
    id: string
    name: string
    issuer: string
    annualFee: number
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: PredefinedCardCountAggregateOutputType | null
    _avg: PredefinedCardAvgAggregateOutputType | null
    _sum: PredefinedCardSumAggregateOutputType | null
    _min: PredefinedCardMinAggregateOutputType | null
    _max: PredefinedCardMaxAggregateOutputType | null
  }

  type GetPredefinedCardGroupByPayload<T extends PredefinedCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredefinedCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredefinedCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredefinedCardGroupByOutputType[P]>
            : GetScalarType<T[P], PredefinedCardGroupByOutputType[P]>
        }
      >
    >


  export type PredefinedCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    annualFee?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    benefits?: boolean | PredefinedCard$benefitsArgs<ExtArgs>
    _count?: boolean | PredefinedCardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predefinedCard"]>

  export type PredefinedCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    annualFee?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["predefinedCard"]>

  export type PredefinedCardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    annualFee?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["predefinedCard"]>

  export type PredefinedCardSelectScalar = {
    id?: boolean
    name?: boolean
    issuer?: boolean
    annualFee?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PredefinedCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "issuer" | "annualFee" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["predefinedCard"]>
  export type PredefinedCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefits?: boolean | PredefinedCard$benefitsArgs<ExtArgs>
    _count?: boolean | PredefinedCardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PredefinedCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PredefinedCardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PredefinedCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PredefinedCard"
    objects: {
      benefits: Prisma.$PredefinedBenefitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      issuer: string
      annualFee: number
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["predefinedCard"]>
    composites: {}
  }

  type PredefinedCardGetPayload<S extends boolean | null | undefined | PredefinedCardDefaultArgs> = $Result.GetResult<Prisma.$PredefinedCardPayload, S>

  type PredefinedCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredefinedCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredefinedCardCountAggregateInputType | true
    }

  export interface PredefinedCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PredefinedCard'], meta: { name: 'PredefinedCard' } }
    /**
     * Find zero or one PredefinedCard that matches the filter.
     * @param {PredefinedCardFindUniqueArgs} args - Arguments to find a PredefinedCard
     * @example
     * // Get one PredefinedCard
     * const predefinedCard = await prisma.predefinedCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredefinedCardFindUniqueArgs>(args: SelectSubset<T, PredefinedCardFindUniqueArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PredefinedCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredefinedCardFindUniqueOrThrowArgs} args - Arguments to find a PredefinedCard
     * @example
     * // Get one PredefinedCard
     * const predefinedCard = await prisma.predefinedCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredefinedCardFindUniqueOrThrowArgs>(args: SelectSubset<T, PredefinedCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredefinedCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedCardFindFirstArgs} args - Arguments to find a PredefinedCard
     * @example
     * // Get one PredefinedCard
     * const predefinedCard = await prisma.predefinedCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredefinedCardFindFirstArgs>(args?: SelectSubset<T, PredefinedCardFindFirstArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredefinedCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedCardFindFirstOrThrowArgs} args - Arguments to find a PredefinedCard
     * @example
     * // Get one PredefinedCard
     * const predefinedCard = await prisma.predefinedCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredefinedCardFindFirstOrThrowArgs>(args?: SelectSubset<T, PredefinedCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PredefinedCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PredefinedCards
     * const predefinedCards = await prisma.predefinedCard.findMany()
     * 
     * // Get first 10 PredefinedCards
     * const predefinedCards = await prisma.predefinedCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predefinedCardWithIdOnly = await prisma.predefinedCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredefinedCardFindManyArgs>(args?: SelectSubset<T, PredefinedCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PredefinedCard.
     * @param {PredefinedCardCreateArgs} args - Arguments to create a PredefinedCard.
     * @example
     * // Create one PredefinedCard
     * const PredefinedCard = await prisma.predefinedCard.create({
     *   data: {
     *     // ... data to create a PredefinedCard
     *   }
     * })
     * 
     */
    create<T extends PredefinedCardCreateArgs>(args: SelectSubset<T, PredefinedCardCreateArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PredefinedCards.
     * @param {PredefinedCardCreateManyArgs} args - Arguments to create many PredefinedCards.
     * @example
     * // Create many PredefinedCards
     * const predefinedCard = await prisma.predefinedCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredefinedCardCreateManyArgs>(args?: SelectSubset<T, PredefinedCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PredefinedCards and returns the data saved in the database.
     * @param {PredefinedCardCreateManyAndReturnArgs} args - Arguments to create many PredefinedCards.
     * @example
     * // Create many PredefinedCards
     * const predefinedCard = await prisma.predefinedCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PredefinedCards and only return the `id`
     * const predefinedCardWithIdOnly = await prisma.predefinedCard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredefinedCardCreateManyAndReturnArgs>(args?: SelectSubset<T, PredefinedCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PredefinedCard.
     * @param {PredefinedCardDeleteArgs} args - Arguments to delete one PredefinedCard.
     * @example
     * // Delete one PredefinedCard
     * const PredefinedCard = await prisma.predefinedCard.delete({
     *   where: {
     *     // ... filter to delete one PredefinedCard
     *   }
     * })
     * 
     */
    delete<T extends PredefinedCardDeleteArgs>(args: SelectSubset<T, PredefinedCardDeleteArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PredefinedCard.
     * @param {PredefinedCardUpdateArgs} args - Arguments to update one PredefinedCard.
     * @example
     * // Update one PredefinedCard
     * const predefinedCard = await prisma.predefinedCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredefinedCardUpdateArgs>(args: SelectSubset<T, PredefinedCardUpdateArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PredefinedCards.
     * @param {PredefinedCardDeleteManyArgs} args - Arguments to filter PredefinedCards to delete.
     * @example
     * // Delete a few PredefinedCards
     * const { count } = await prisma.predefinedCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredefinedCardDeleteManyArgs>(args?: SelectSubset<T, PredefinedCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredefinedCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PredefinedCards
     * const predefinedCard = await prisma.predefinedCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredefinedCardUpdateManyArgs>(args: SelectSubset<T, PredefinedCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredefinedCards and returns the data updated in the database.
     * @param {PredefinedCardUpdateManyAndReturnArgs} args - Arguments to update many PredefinedCards.
     * @example
     * // Update many PredefinedCards
     * const predefinedCard = await prisma.predefinedCard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PredefinedCards and only return the `id`
     * const predefinedCardWithIdOnly = await prisma.predefinedCard.updateManyAndReturn({
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
    updateManyAndReturn<T extends PredefinedCardUpdateManyAndReturnArgs>(args: SelectSubset<T, PredefinedCardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PredefinedCard.
     * @param {PredefinedCardUpsertArgs} args - Arguments to update or create a PredefinedCard.
     * @example
     * // Update or create a PredefinedCard
     * const predefinedCard = await prisma.predefinedCard.upsert({
     *   create: {
     *     // ... data to create a PredefinedCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PredefinedCard we want to update
     *   }
     * })
     */
    upsert<T extends PredefinedCardUpsertArgs>(args: SelectSubset<T, PredefinedCardUpsertArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PredefinedCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedCardCountArgs} args - Arguments to filter PredefinedCards to count.
     * @example
     * // Count the number of PredefinedCards
     * const count = await prisma.predefinedCard.count({
     *   where: {
     *     // ... the filter for the PredefinedCards we want to count
     *   }
     * })
    **/
    count<T extends PredefinedCardCountArgs>(
      args?: Subset<T, PredefinedCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredefinedCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PredefinedCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PredefinedCardAggregateArgs>(args: Subset<T, PredefinedCardAggregateArgs>): Prisma.PrismaPromise<GetPredefinedCardAggregateType<T>>

    /**
     * Group by PredefinedCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedCardGroupByArgs} args - Group by arguments.
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
      T extends PredefinedCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredefinedCardGroupByArgs['orderBy'] }
        : { orderBy?: PredefinedCardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PredefinedCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredefinedCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PredefinedCard model
   */
  readonly fields: PredefinedCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PredefinedCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredefinedCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    benefits<T extends PredefinedCard$benefitsArgs<ExtArgs> = {}>(args?: Subset<T, PredefinedCard$benefitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PredefinedCard model
   */
  interface PredefinedCardFieldRefs {
    readonly id: FieldRef<"PredefinedCard", 'String'>
    readonly name: FieldRef<"PredefinedCard", 'String'>
    readonly issuer: FieldRef<"PredefinedCard", 'String'>
    readonly annualFee: FieldRef<"PredefinedCard", 'Float'>
    readonly imageUrl: FieldRef<"PredefinedCard", 'String'>
    readonly createdAt: FieldRef<"PredefinedCard", 'DateTime'>
    readonly updatedAt: FieldRef<"PredefinedCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PredefinedCard findUnique
   */
  export type PredefinedCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedCard to fetch.
     */
    where: PredefinedCardWhereUniqueInput
  }

  /**
   * PredefinedCard findUniqueOrThrow
   */
  export type PredefinedCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedCard to fetch.
     */
    where: PredefinedCardWhereUniqueInput
  }

  /**
   * PredefinedCard findFirst
   */
  export type PredefinedCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedCard to fetch.
     */
    where?: PredefinedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedCards to fetch.
     */
    orderBy?: PredefinedCardOrderByWithRelationInput | PredefinedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredefinedCards.
     */
    cursor?: PredefinedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredefinedCards.
     */
    distinct?: PredefinedCardScalarFieldEnum | PredefinedCardScalarFieldEnum[]
  }

  /**
   * PredefinedCard findFirstOrThrow
   */
  export type PredefinedCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedCard to fetch.
     */
    where?: PredefinedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedCards to fetch.
     */
    orderBy?: PredefinedCardOrderByWithRelationInput | PredefinedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredefinedCards.
     */
    cursor?: PredefinedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredefinedCards.
     */
    distinct?: PredefinedCardScalarFieldEnum | PredefinedCardScalarFieldEnum[]
  }

  /**
   * PredefinedCard findMany
   */
  export type PredefinedCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedCards to fetch.
     */
    where?: PredefinedCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedCards to fetch.
     */
    orderBy?: PredefinedCardOrderByWithRelationInput | PredefinedCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PredefinedCards.
     */
    cursor?: PredefinedCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedCards.
     */
    skip?: number
    distinct?: PredefinedCardScalarFieldEnum | PredefinedCardScalarFieldEnum[]
  }

  /**
   * PredefinedCard create
   */
  export type PredefinedCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * The data needed to create a PredefinedCard.
     */
    data: XOR<PredefinedCardCreateInput, PredefinedCardUncheckedCreateInput>
  }

  /**
   * PredefinedCard createMany
   */
  export type PredefinedCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PredefinedCards.
     */
    data: PredefinedCardCreateManyInput | PredefinedCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PredefinedCard createManyAndReturn
   */
  export type PredefinedCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * The data used to create many PredefinedCards.
     */
    data: PredefinedCardCreateManyInput | PredefinedCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PredefinedCard update
   */
  export type PredefinedCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * The data needed to update a PredefinedCard.
     */
    data: XOR<PredefinedCardUpdateInput, PredefinedCardUncheckedUpdateInput>
    /**
     * Choose, which PredefinedCard to update.
     */
    where: PredefinedCardWhereUniqueInput
  }

  /**
   * PredefinedCard updateMany
   */
  export type PredefinedCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PredefinedCards.
     */
    data: XOR<PredefinedCardUpdateManyMutationInput, PredefinedCardUncheckedUpdateManyInput>
    /**
     * Filter which PredefinedCards to update
     */
    where?: PredefinedCardWhereInput
    /**
     * Limit how many PredefinedCards to update.
     */
    limit?: number
  }

  /**
   * PredefinedCard updateManyAndReturn
   */
  export type PredefinedCardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * The data used to update PredefinedCards.
     */
    data: XOR<PredefinedCardUpdateManyMutationInput, PredefinedCardUncheckedUpdateManyInput>
    /**
     * Filter which PredefinedCards to update
     */
    where?: PredefinedCardWhereInput
    /**
     * Limit how many PredefinedCards to update.
     */
    limit?: number
  }

  /**
   * PredefinedCard upsert
   */
  export type PredefinedCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * The filter to search for the PredefinedCard to update in case it exists.
     */
    where: PredefinedCardWhereUniqueInput
    /**
     * In case the PredefinedCard found by the `where` argument doesn't exist, create a new PredefinedCard with this data.
     */
    create: XOR<PredefinedCardCreateInput, PredefinedCardUncheckedCreateInput>
    /**
     * In case the PredefinedCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredefinedCardUpdateInput, PredefinedCardUncheckedUpdateInput>
  }

  /**
   * PredefinedCard delete
   */
  export type PredefinedCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
    /**
     * Filter which PredefinedCard to delete.
     */
    where: PredefinedCardWhereUniqueInput
  }

  /**
   * PredefinedCard deleteMany
   */
  export type PredefinedCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredefinedCards to delete
     */
    where?: PredefinedCardWhereInput
    /**
     * Limit how many PredefinedCards to delete.
     */
    limit?: number
  }

  /**
   * PredefinedCard.benefits
   */
  export type PredefinedCard$benefitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    where?: PredefinedBenefitWhereInput
    orderBy?: PredefinedBenefitOrderByWithRelationInput | PredefinedBenefitOrderByWithRelationInput[]
    cursor?: PredefinedBenefitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredefinedBenefitScalarFieldEnum | PredefinedBenefitScalarFieldEnum[]
  }

  /**
   * PredefinedCard without action
   */
  export type PredefinedCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedCard
     */
    select?: PredefinedCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedCard
     */
    omit?: PredefinedCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedCardInclude<ExtArgs> | null
  }


  /**
   * Model PredefinedBenefit
   */

  export type AggregatePredefinedBenefit = {
    _count: PredefinedBenefitCountAggregateOutputType | null
    _avg: PredefinedBenefitAvgAggregateOutputType | null
    _sum: PredefinedBenefitSumAggregateOutputType | null
    _min: PredefinedBenefitMinAggregateOutputType | null
    _max: PredefinedBenefitMaxAggregateOutputType | null
  }

  export type PredefinedBenefitAvgAggregateOutputType = {
    percentage: number | null
    maxAmount: number | null
  }

  export type PredefinedBenefitSumAggregateOutputType = {
    percentage: number | null
    maxAmount: number | null
  }

  export type PredefinedBenefitMinAggregateOutputType = {
    id: string | null
    category: string | null
    description: string | null
    percentage: number | null
    maxAmount: number | null
    frequency: $Enums.BenefitFrequency | null
    predefinedCardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredefinedBenefitMaxAggregateOutputType = {
    id: string | null
    category: string | null
    description: string | null
    percentage: number | null
    maxAmount: number | null
    frequency: $Enums.BenefitFrequency | null
    predefinedCardId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredefinedBenefitCountAggregateOutputType = {
    id: number
    category: number
    description: number
    percentage: number
    maxAmount: number
    frequency: number
    predefinedCardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PredefinedBenefitAvgAggregateInputType = {
    percentage?: true
    maxAmount?: true
  }

  export type PredefinedBenefitSumAggregateInputType = {
    percentage?: true
    maxAmount?: true
  }

  export type PredefinedBenefitMinAggregateInputType = {
    id?: true
    category?: true
    description?: true
    percentage?: true
    maxAmount?: true
    frequency?: true
    predefinedCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredefinedBenefitMaxAggregateInputType = {
    id?: true
    category?: true
    description?: true
    percentage?: true
    maxAmount?: true
    frequency?: true
    predefinedCardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredefinedBenefitCountAggregateInputType = {
    id?: true
    category?: true
    description?: true
    percentage?: true
    maxAmount?: true
    frequency?: true
    predefinedCardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PredefinedBenefitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredefinedBenefit to aggregate.
     */
    where?: PredefinedBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedBenefits to fetch.
     */
    orderBy?: PredefinedBenefitOrderByWithRelationInput | PredefinedBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredefinedBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PredefinedBenefits
    **/
    _count?: true | PredefinedBenefitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredefinedBenefitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredefinedBenefitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredefinedBenefitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredefinedBenefitMaxAggregateInputType
  }

  export type GetPredefinedBenefitAggregateType<T extends PredefinedBenefitAggregateArgs> = {
        [P in keyof T & keyof AggregatePredefinedBenefit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePredefinedBenefit[P]>
      : GetScalarType<T[P], AggregatePredefinedBenefit[P]>
  }




  export type PredefinedBenefitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredefinedBenefitWhereInput
    orderBy?: PredefinedBenefitOrderByWithAggregationInput | PredefinedBenefitOrderByWithAggregationInput[]
    by: PredefinedBenefitScalarFieldEnum[] | PredefinedBenefitScalarFieldEnum
    having?: PredefinedBenefitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredefinedBenefitCountAggregateInputType | true
    _avg?: PredefinedBenefitAvgAggregateInputType
    _sum?: PredefinedBenefitSumAggregateInputType
    _min?: PredefinedBenefitMinAggregateInputType
    _max?: PredefinedBenefitMaxAggregateInputType
  }

  export type PredefinedBenefitGroupByOutputType = {
    id: string
    category: string
    description: string
    percentage: number
    maxAmount: number | null
    frequency: $Enums.BenefitFrequency
    predefinedCardId: string
    createdAt: Date
    updatedAt: Date
    _count: PredefinedBenefitCountAggregateOutputType | null
    _avg: PredefinedBenefitAvgAggregateOutputType | null
    _sum: PredefinedBenefitSumAggregateOutputType | null
    _min: PredefinedBenefitMinAggregateOutputType | null
    _max: PredefinedBenefitMaxAggregateOutputType | null
  }

  type GetPredefinedBenefitGroupByPayload<T extends PredefinedBenefitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredefinedBenefitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredefinedBenefitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredefinedBenefitGroupByOutputType[P]>
            : GetScalarType<T[P], PredefinedBenefitGroupByOutputType[P]>
        }
      >
    >


  export type PredefinedBenefitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    frequency?: boolean
    predefinedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    predefinedCard?: boolean | PredefinedCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predefinedBenefit"]>

  export type PredefinedBenefitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    frequency?: boolean
    predefinedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    predefinedCard?: boolean | PredefinedCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predefinedBenefit"]>

  export type PredefinedBenefitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    frequency?: boolean
    predefinedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    predefinedCard?: boolean | PredefinedCardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["predefinedBenefit"]>

  export type PredefinedBenefitSelectScalar = {
    id?: boolean
    category?: boolean
    description?: boolean
    percentage?: boolean
    maxAmount?: boolean
    frequency?: boolean
    predefinedCardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PredefinedBenefitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "description" | "percentage" | "maxAmount" | "frequency" | "predefinedCardId" | "createdAt" | "updatedAt", ExtArgs["result"]["predefinedBenefit"]>
  export type PredefinedBenefitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predefinedCard?: boolean | PredefinedCardDefaultArgs<ExtArgs>
  }
  export type PredefinedBenefitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predefinedCard?: boolean | PredefinedCardDefaultArgs<ExtArgs>
  }
  export type PredefinedBenefitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predefinedCard?: boolean | PredefinedCardDefaultArgs<ExtArgs>
  }

  export type $PredefinedBenefitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PredefinedBenefit"
    objects: {
      predefinedCard: Prisma.$PredefinedCardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      category: string
      description: string
      percentage: number
      maxAmount: number | null
      frequency: $Enums.BenefitFrequency
      predefinedCardId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["predefinedBenefit"]>
    composites: {}
  }

  type PredefinedBenefitGetPayload<S extends boolean | null | undefined | PredefinedBenefitDefaultArgs> = $Result.GetResult<Prisma.$PredefinedBenefitPayload, S>

  type PredefinedBenefitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredefinedBenefitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredefinedBenefitCountAggregateInputType | true
    }

  export interface PredefinedBenefitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PredefinedBenefit'], meta: { name: 'PredefinedBenefit' } }
    /**
     * Find zero or one PredefinedBenefit that matches the filter.
     * @param {PredefinedBenefitFindUniqueArgs} args - Arguments to find a PredefinedBenefit
     * @example
     * // Get one PredefinedBenefit
     * const predefinedBenefit = await prisma.predefinedBenefit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredefinedBenefitFindUniqueArgs>(args: SelectSubset<T, PredefinedBenefitFindUniqueArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PredefinedBenefit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredefinedBenefitFindUniqueOrThrowArgs} args - Arguments to find a PredefinedBenefit
     * @example
     * // Get one PredefinedBenefit
     * const predefinedBenefit = await prisma.predefinedBenefit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredefinedBenefitFindUniqueOrThrowArgs>(args: SelectSubset<T, PredefinedBenefitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredefinedBenefit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedBenefitFindFirstArgs} args - Arguments to find a PredefinedBenefit
     * @example
     * // Get one PredefinedBenefit
     * const predefinedBenefit = await prisma.predefinedBenefit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredefinedBenefitFindFirstArgs>(args?: SelectSubset<T, PredefinedBenefitFindFirstArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PredefinedBenefit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedBenefitFindFirstOrThrowArgs} args - Arguments to find a PredefinedBenefit
     * @example
     * // Get one PredefinedBenefit
     * const predefinedBenefit = await prisma.predefinedBenefit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredefinedBenefitFindFirstOrThrowArgs>(args?: SelectSubset<T, PredefinedBenefitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PredefinedBenefits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedBenefitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PredefinedBenefits
     * const predefinedBenefits = await prisma.predefinedBenefit.findMany()
     * 
     * // Get first 10 PredefinedBenefits
     * const predefinedBenefits = await prisma.predefinedBenefit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predefinedBenefitWithIdOnly = await prisma.predefinedBenefit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredefinedBenefitFindManyArgs>(args?: SelectSubset<T, PredefinedBenefitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PredefinedBenefit.
     * @param {PredefinedBenefitCreateArgs} args - Arguments to create a PredefinedBenefit.
     * @example
     * // Create one PredefinedBenefit
     * const PredefinedBenefit = await prisma.predefinedBenefit.create({
     *   data: {
     *     // ... data to create a PredefinedBenefit
     *   }
     * })
     * 
     */
    create<T extends PredefinedBenefitCreateArgs>(args: SelectSubset<T, PredefinedBenefitCreateArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PredefinedBenefits.
     * @param {PredefinedBenefitCreateManyArgs} args - Arguments to create many PredefinedBenefits.
     * @example
     * // Create many PredefinedBenefits
     * const predefinedBenefit = await prisma.predefinedBenefit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredefinedBenefitCreateManyArgs>(args?: SelectSubset<T, PredefinedBenefitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PredefinedBenefits and returns the data saved in the database.
     * @param {PredefinedBenefitCreateManyAndReturnArgs} args - Arguments to create many PredefinedBenefits.
     * @example
     * // Create many PredefinedBenefits
     * const predefinedBenefit = await prisma.predefinedBenefit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PredefinedBenefits and only return the `id`
     * const predefinedBenefitWithIdOnly = await prisma.predefinedBenefit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredefinedBenefitCreateManyAndReturnArgs>(args?: SelectSubset<T, PredefinedBenefitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PredefinedBenefit.
     * @param {PredefinedBenefitDeleteArgs} args - Arguments to delete one PredefinedBenefit.
     * @example
     * // Delete one PredefinedBenefit
     * const PredefinedBenefit = await prisma.predefinedBenefit.delete({
     *   where: {
     *     // ... filter to delete one PredefinedBenefit
     *   }
     * })
     * 
     */
    delete<T extends PredefinedBenefitDeleteArgs>(args: SelectSubset<T, PredefinedBenefitDeleteArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PredefinedBenefit.
     * @param {PredefinedBenefitUpdateArgs} args - Arguments to update one PredefinedBenefit.
     * @example
     * // Update one PredefinedBenefit
     * const predefinedBenefit = await prisma.predefinedBenefit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredefinedBenefitUpdateArgs>(args: SelectSubset<T, PredefinedBenefitUpdateArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PredefinedBenefits.
     * @param {PredefinedBenefitDeleteManyArgs} args - Arguments to filter PredefinedBenefits to delete.
     * @example
     * // Delete a few PredefinedBenefits
     * const { count } = await prisma.predefinedBenefit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredefinedBenefitDeleteManyArgs>(args?: SelectSubset<T, PredefinedBenefitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredefinedBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedBenefitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PredefinedBenefits
     * const predefinedBenefit = await prisma.predefinedBenefit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredefinedBenefitUpdateManyArgs>(args: SelectSubset<T, PredefinedBenefitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PredefinedBenefits and returns the data updated in the database.
     * @param {PredefinedBenefitUpdateManyAndReturnArgs} args - Arguments to update many PredefinedBenefits.
     * @example
     * // Update many PredefinedBenefits
     * const predefinedBenefit = await prisma.predefinedBenefit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PredefinedBenefits and only return the `id`
     * const predefinedBenefitWithIdOnly = await prisma.predefinedBenefit.updateManyAndReturn({
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
    updateManyAndReturn<T extends PredefinedBenefitUpdateManyAndReturnArgs>(args: SelectSubset<T, PredefinedBenefitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PredefinedBenefit.
     * @param {PredefinedBenefitUpsertArgs} args - Arguments to update or create a PredefinedBenefit.
     * @example
     * // Update or create a PredefinedBenefit
     * const predefinedBenefit = await prisma.predefinedBenefit.upsert({
     *   create: {
     *     // ... data to create a PredefinedBenefit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PredefinedBenefit we want to update
     *   }
     * })
     */
    upsert<T extends PredefinedBenefitUpsertArgs>(args: SelectSubset<T, PredefinedBenefitUpsertArgs<ExtArgs>>): Prisma__PredefinedBenefitClient<$Result.GetResult<Prisma.$PredefinedBenefitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PredefinedBenefits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedBenefitCountArgs} args - Arguments to filter PredefinedBenefits to count.
     * @example
     * // Count the number of PredefinedBenefits
     * const count = await prisma.predefinedBenefit.count({
     *   where: {
     *     // ... the filter for the PredefinedBenefits we want to count
     *   }
     * })
    **/
    count<T extends PredefinedBenefitCountArgs>(
      args?: Subset<T, PredefinedBenefitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredefinedBenefitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PredefinedBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedBenefitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PredefinedBenefitAggregateArgs>(args: Subset<T, PredefinedBenefitAggregateArgs>): Prisma.PrismaPromise<GetPredefinedBenefitAggregateType<T>>

    /**
     * Group by PredefinedBenefit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredefinedBenefitGroupByArgs} args - Group by arguments.
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
      T extends PredefinedBenefitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredefinedBenefitGroupByArgs['orderBy'] }
        : { orderBy?: PredefinedBenefitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PredefinedBenefitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredefinedBenefitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PredefinedBenefit model
   */
  readonly fields: PredefinedBenefitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PredefinedBenefit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredefinedBenefitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    predefinedCard<T extends PredefinedCardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PredefinedCardDefaultArgs<ExtArgs>>): Prisma__PredefinedCardClient<$Result.GetResult<Prisma.$PredefinedCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PredefinedBenefit model
   */
  interface PredefinedBenefitFieldRefs {
    readonly id: FieldRef<"PredefinedBenefit", 'String'>
    readonly category: FieldRef<"PredefinedBenefit", 'String'>
    readonly description: FieldRef<"PredefinedBenefit", 'String'>
    readonly percentage: FieldRef<"PredefinedBenefit", 'Float'>
    readonly maxAmount: FieldRef<"PredefinedBenefit", 'Float'>
    readonly frequency: FieldRef<"PredefinedBenefit", 'BenefitFrequency'>
    readonly predefinedCardId: FieldRef<"PredefinedBenefit", 'String'>
    readonly createdAt: FieldRef<"PredefinedBenefit", 'DateTime'>
    readonly updatedAt: FieldRef<"PredefinedBenefit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PredefinedBenefit findUnique
   */
  export type PredefinedBenefitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedBenefit to fetch.
     */
    where: PredefinedBenefitWhereUniqueInput
  }

  /**
   * PredefinedBenefit findUniqueOrThrow
   */
  export type PredefinedBenefitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedBenefit to fetch.
     */
    where: PredefinedBenefitWhereUniqueInput
  }

  /**
   * PredefinedBenefit findFirst
   */
  export type PredefinedBenefitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedBenefit to fetch.
     */
    where?: PredefinedBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedBenefits to fetch.
     */
    orderBy?: PredefinedBenefitOrderByWithRelationInput | PredefinedBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredefinedBenefits.
     */
    cursor?: PredefinedBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredefinedBenefits.
     */
    distinct?: PredefinedBenefitScalarFieldEnum | PredefinedBenefitScalarFieldEnum[]
  }

  /**
   * PredefinedBenefit findFirstOrThrow
   */
  export type PredefinedBenefitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedBenefit to fetch.
     */
    where?: PredefinedBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedBenefits to fetch.
     */
    orderBy?: PredefinedBenefitOrderByWithRelationInput | PredefinedBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PredefinedBenefits.
     */
    cursor?: PredefinedBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedBenefits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PredefinedBenefits.
     */
    distinct?: PredefinedBenefitScalarFieldEnum | PredefinedBenefitScalarFieldEnum[]
  }

  /**
   * PredefinedBenefit findMany
   */
  export type PredefinedBenefitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * Filter, which PredefinedBenefits to fetch.
     */
    where?: PredefinedBenefitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PredefinedBenefits to fetch.
     */
    orderBy?: PredefinedBenefitOrderByWithRelationInput | PredefinedBenefitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PredefinedBenefits.
     */
    cursor?: PredefinedBenefitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PredefinedBenefits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PredefinedBenefits.
     */
    skip?: number
    distinct?: PredefinedBenefitScalarFieldEnum | PredefinedBenefitScalarFieldEnum[]
  }

  /**
   * PredefinedBenefit create
   */
  export type PredefinedBenefitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * The data needed to create a PredefinedBenefit.
     */
    data: XOR<PredefinedBenefitCreateInput, PredefinedBenefitUncheckedCreateInput>
  }

  /**
   * PredefinedBenefit createMany
   */
  export type PredefinedBenefitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PredefinedBenefits.
     */
    data: PredefinedBenefitCreateManyInput | PredefinedBenefitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PredefinedBenefit createManyAndReturn
   */
  export type PredefinedBenefitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * The data used to create many PredefinedBenefits.
     */
    data: PredefinedBenefitCreateManyInput | PredefinedBenefitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredefinedBenefit update
   */
  export type PredefinedBenefitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * The data needed to update a PredefinedBenefit.
     */
    data: XOR<PredefinedBenefitUpdateInput, PredefinedBenefitUncheckedUpdateInput>
    /**
     * Choose, which PredefinedBenefit to update.
     */
    where: PredefinedBenefitWhereUniqueInput
  }

  /**
   * PredefinedBenefit updateMany
   */
  export type PredefinedBenefitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PredefinedBenefits.
     */
    data: XOR<PredefinedBenefitUpdateManyMutationInput, PredefinedBenefitUncheckedUpdateManyInput>
    /**
     * Filter which PredefinedBenefits to update
     */
    where?: PredefinedBenefitWhereInput
    /**
     * Limit how many PredefinedBenefits to update.
     */
    limit?: number
  }

  /**
   * PredefinedBenefit updateManyAndReturn
   */
  export type PredefinedBenefitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * The data used to update PredefinedBenefits.
     */
    data: XOR<PredefinedBenefitUpdateManyMutationInput, PredefinedBenefitUncheckedUpdateManyInput>
    /**
     * Filter which PredefinedBenefits to update
     */
    where?: PredefinedBenefitWhereInput
    /**
     * Limit how many PredefinedBenefits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PredefinedBenefit upsert
   */
  export type PredefinedBenefitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * The filter to search for the PredefinedBenefit to update in case it exists.
     */
    where: PredefinedBenefitWhereUniqueInput
    /**
     * In case the PredefinedBenefit found by the `where` argument doesn't exist, create a new PredefinedBenefit with this data.
     */
    create: XOR<PredefinedBenefitCreateInput, PredefinedBenefitUncheckedCreateInput>
    /**
     * In case the PredefinedBenefit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredefinedBenefitUpdateInput, PredefinedBenefitUncheckedUpdateInput>
  }

  /**
   * PredefinedBenefit delete
   */
  export type PredefinedBenefitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
    /**
     * Filter which PredefinedBenefit to delete.
     */
    where: PredefinedBenefitWhereUniqueInput
  }

  /**
   * PredefinedBenefit deleteMany
   */
  export type PredefinedBenefitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PredefinedBenefits to delete
     */
    where?: PredefinedBenefitWhereInput
    /**
     * Limit how many PredefinedBenefits to delete.
     */
    limit?: number
  }

  /**
   * PredefinedBenefit without action
   */
  export type PredefinedBenefitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PredefinedBenefit
     */
    select?: PredefinedBenefitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PredefinedBenefit
     */
    omit?: PredefinedBenefitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredefinedBenefitInclude<ExtArgs> | null
  }


  /**
   * Model BenefitStatus
   */

  export type AggregateBenefitStatus = {
    _count: BenefitStatusCountAggregateOutputType | null
    _min: BenefitStatusMinAggregateOutputType | null
    _max: BenefitStatusMaxAggregateOutputType | null
  }

  export type BenefitStatusMinAggregateOutputType = {
    id: string | null
    benefitId: string | null
    userId: string | null
    cycleStartDate: Date | null
    cycleEndDate: Date | null
    isCompleted: boolean | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitStatusMaxAggregateOutputType = {
    id: string | null
    benefitId: string | null
    userId: string | null
    cycleStartDate: Date | null
    cycleEndDate: Date | null
    isCompleted: boolean | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BenefitStatusCountAggregateOutputType = {
    id: number
    benefitId: number
    userId: number
    cycleStartDate: number
    cycleEndDate: number
    isCompleted: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BenefitStatusMinAggregateInputType = {
    id?: true
    benefitId?: true
    userId?: true
    cycleStartDate?: true
    cycleEndDate?: true
    isCompleted?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitStatusMaxAggregateInputType = {
    id?: true
    benefitId?: true
    userId?: true
    cycleStartDate?: true
    cycleEndDate?: true
    isCompleted?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BenefitStatusCountAggregateInputType = {
    id?: true
    benefitId?: true
    userId?: true
    cycleStartDate?: true
    cycleEndDate?: true
    isCompleted?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BenefitStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BenefitStatus to aggregate.
     */
    where?: BenefitStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenefitStatuses to fetch.
     */
    orderBy?: BenefitStatusOrderByWithRelationInput | BenefitStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BenefitStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenefitStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenefitStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BenefitStatuses
    **/
    _count?: true | BenefitStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BenefitStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BenefitStatusMaxAggregateInputType
  }

  export type GetBenefitStatusAggregateType<T extends BenefitStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateBenefitStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBenefitStatus[P]>
      : GetScalarType<T[P], AggregateBenefitStatus[P]>
  }




  export type BenefitStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BenefitStatusWhereInput
    orderBy?: BenefitStatusOrderByWithAggregationInput | BenefitStatusOrderByWithAggregationInput[]
    by: BenefitStatusScalarFieldEnum[] | BenefitStatusScalarFieldEnum
    having?: BenefitStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BenefitStatusCountAggregateInputType | true
    _min?: BenefitStatusMinAggregateInputType
    _max?: BenefitStatusMaxAggregateInputType
  }

  export type BenefitStatusGroupByOutputType = {
    id: string
    benefitId: string
    userId: string
    cycleStartDate: Date
    cycleEndDate: Date
    isCompleted: boolean
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: BenefitStatusCountAggregateOutputType | null
    _min: BenefitStatusMinAggregateOutputType | null
    _max: BenefitStatusMaxAggregateOutputType | null
  }

  type GetBenefitStatusGroupByPayload<T extends BenefitStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BenefitStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BenefitStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BenefitStatusGroupByOutputType[P]>
            : GetScalarType<T[P], BenefitStatusGroupByOutputType[P]>
        }
      >
    >


  export type BenefitStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    benefitId?: boolean
    userId?: boolean
    cycleStartDate?: boolean
    cycleEndDate?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefitStatus"]>

  export type BenefitStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    benefitId?: boolean
    userId?: boolean
    cycleStartDate?: boolean
    cycleEndDate?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefitStatus"]>

  export type BenefitStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    benefitId?: boolean
    userId?: boolean
    cycleStartDate?: boolean
    cycleEndDate?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["benefitStatus"]>

  export type BenefitStatusSelectScalar = {
    id?: boolean
    benefitId?: boolean
    userId?: boolean
    cycleStartDate?: boolean
    cycleEndDate?: boolean
    isCompleted?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BenefitStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "benefitId" | "userId" | "cycleStartDate" | "cycleEndDate" | "isCompleted" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["benefitStatus"]>
  export type BenefitStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BenefitStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BenefitStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    benefit?: boolean | BenefitDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BenefitStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BenefitStatus"
    objects: {
      benefit: Prisma.$BenefitPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      benefitId: string
      userId: string
      cycleStartDate: Date
      cycleEndDate: Date
      isCompleted: boolean
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["benefitStatus"]>
    composites: {}
  }

  type BenefitStatusGetPayload<S extends boolean | null | undefined | BenefitStatusDefaultArgs> = $Result.GetResult<Prisma.$BenefitStatusPayload, S>

  type BenefitStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BenefitStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BenefitStatusCountAggregateInputType | true
    }

  export interface BenefitStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BenefitStatus'], meta: { name: 'BenefitStatus' } }
    /**
     * Find zero or one BenefitStatus that matches the filter.
     * @param {BenefitStatusFindUniqueArgs} args - Arguments to find a BenefitStatus
     * @example
     * // Get one BenefitStatus
     * const benefitStatus = await prisma.benefitStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BenefitStatusFindUniqueArgs>(args: SelectSubset<T, BenefitStatusFindUniqueArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BenefitStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BenefitStatusFindUniqueOrThrowArgs} args - Arguments to find a BenefitStatus
     * @example
     * // Get one BenefitStatus
     * const benefitStatus = await prisma.benefitStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BenefitStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, BenefitStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BenefitStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitStatusFindFirstArgs} args - Arguments to find a BenefitStatus
     * @example
     * // Get one BenefitStatus
     * const benefitStatus = await prisma.benefitStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BenefitStatusFindFirstArgs>(args?: SelectSubset<T, BenefitStatusFindFirstArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BenefitStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitStatusFindFirstOrThrowArgs} args - Arguments to find a BenefitStatus
     * @example
     * // Get one BenefitStatus
     * const benefitStatus = await prisma.benefitStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BenefitStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, BenefitStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BenefitStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BenefitStatuses
     * const benefitStatuses = await prisma.benefitStatus.findMany()
     * 
     * // Get first 10 BenefitStatuses
     * const benefitStatuses = await prisma.benefitStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const benefitStatusWithIdOnly = await prisma.benefitStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BenefitStatusFindManyArgs>(args?: SelectSubset<T, BenefitStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BenefitStatus.
     * @param {BenefitStatusCreateArgs} args - Arguments to create a BenefitStatus.
     * @example
     * // Create one BenefitStatus
     * const BenefitStatus = await prisma.benefitStatus.create({
     *   data: {
     *     // ... data to create a BenefitStatus
     *   }
     * })
     * 
     */
    create<T extends BenefitStatusCreateArgs>(args: SelectSubset<T, BenefitStatusCreateArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BenefitStatuses.
     * @param {BenefitStatusCreateManyArgs} args - Arguments to create many BenefitStatuses.
     * @example
     * // Create many BenefitStatuses
     * const benefitStatus = await prisma.benefitStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BenefitStatusCreateManyArgs>(args?: SelectSubset<T, BenefitStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BenefitStatuses and returns the data saved in the database.
     * @param {BenefitStatusCreateManyAndReturnArgs} args - Arguments to create many BenefitStatuses.
     * @example
     * // Create many BenefitStatuses
     * const benefitStatus = await prisma.benefitStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BenefitStatuses and only return the `id`
     * const benefitStatusWithIdOnly = await prisma.benefitStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BenefitStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, BenefitStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BenefitStatus.
     * @param {BenefitStatusDeleteArgs} args - Arguments to delete one BenefitStatus.
     * @example
     * // Delete one BenefitStatus
     * const BenefitStatus = await prisma.benefitStatus.delete({
     *   where: {
     *     // ... filter to delete one BenefitStatus
     *   }
     * })
     * 
     */
    delete<T extends BenefitStatusDeleteArgs>(args: SelectSubset<T, BenefitStatusDeleteArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BenefitStatus.
     * @param {BenefitStatusUpdateArgs} args - Arguments to update one BenefitStatus.
     * @example
     * // Update one BenefitStatus
     * const benefitStatus = await prisma.benefitStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BenefitStatusUpdateArgs>(args: SelectSubset<T, BenefitStatusUpdateArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BenefitStatuses.
     * @param {BenefitStatusDeleteManyArgs} args - Arguments to filter BenefitStatuses to delete.
     * @example
     * // Delete a few BenefitStatuses
     * const { count } = await prisma.benefitStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BenefitStatusDeleteManyArgs>(args?: SelectSubset<T, BenefitStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BenefitStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BenefitStatuses
     * const benefitStatus = await prisma.benefitStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BenefitStatusUpdateManyArgs>(args: SelectSubset<T, BenefitStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BenefitStatuses and returns the data updated in the database.
     * @param {BenefitStatusUpdateManyAndReturnArgs} args - Arguments to update many BenefitStatuses.
     * @example
     * // Update many BenefitStatuses
     * const benefitStatus = await prisma.benefitStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BenefitStatuses and only return the `id`
     * const benefitStatusWithIdOnly = await prisma.benefitStatus.updateManyAndReturn({
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
    updateManyAndReturn<T extends BenefitStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, BenefitStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BenefitStatus.
     * @param {BenefitStatusUpsertArgs} args - Arguments to update or create a BenefitStatus.
     * @example
     * // Update or create a BenefitStatus
     * const benefitStatus = await prisma.benefitStatus.upsert({
     *   create: {
     *     // ... data to create a BenefitStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BenefitStatus we want to update
     *   }
     * })
     */
    upsert<T extends BenefitStatusUpsertArgs>(args: SelectSubset<T, BenefitStatusUpsertArgs<ExtArgs>>): Prisma__BenefitStatusClient<$Result.GetResult<Prisma.$BenefitStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BenefitStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitStatusCountArgs} args - Arguments to filter BenefitStatuses to count.
     * @example
     * // Count the number of BenefitStatuses
     * const count = await prisma.benefitStatus.count({
     *   where: {
     *     // ... the filter for the BenefitStatuses we want to count
     *   }
     * })
    **/
    count<T extends BenefitStatusCountArgs>(
      args?: Subset<T, BenefitStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BenefitStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BenefitStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BenefitStatusAggregateArgs>(args: Subset<T, BenefitStatusAggregateArgs>): Prisma.PrismaPromise<GetBenefitStatusAggregateType<T>>

    /**
     * Group by BenefitStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BenefitStatusGroupByArgs} args - Group by arguments.
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
      T extends BenefitStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BenefitStatusGroupByArgs['orderBy'] }
        : { orderBy?: BenefitStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BenefitStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBenefitStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BenefitStatus model
   */
  readonly fields: BenefitStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BenefitStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BenefitStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    benefit<T extends BenefitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BenefitDefaultArgs<ExtArgs>>): Prisma__BenefitClient<$Result.GetResult<Prisma.$BenefitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BenefitStatus model
   */
  interface BenefitStatusFieldRefs {
    readonly id: FieldRef<"BenefitStatus", 'String'>
    readonly benefitId: FieldRef<"BenefitStatus", 'String'>
    readonly userId: FieldRef<"BenefitStatus", 'String'>
    readonly cycleStartDate: FieldRef<"BenefitStatus", 'DateTime'>
    readonly cycleEndDate: FieldRef<"BenefitStatus", 'DateTime'>
    readonly isCompleted: FieldRef<"BenefitStatus", 'Boolean'>
    readonly completedAt: FieldRef<"BenefitStatus", 'DateTime'>
    readonly createdAt: FieldRef<"BenefitStatus", 'DateTime'>
    readonly updatedAt: FieldRef<"BenefitStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BenefitStatus findUnique
   */
  export type BenefitStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * Filter, which BenefitStatus to fetch.
     */
    where: BenefitStatusWhereUniqueInput
  }

  /**
   * BenefitStatus findUniqueOrThrow
   */
  export type BenefitStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * Filter, which BenefitStatus to fetch.
     */
    where: BenefitStatusWhereUniqueInput
  }

  /**
   * BenefitStatus findFirst
   */
  export type BenefitStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * Filter, which BenefitStatus to fetch.
     */
    where?: BenefitStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenefitStatuses to fetch.
     */
    orderBy?: BenefitStatusOrderByWithRelationInput | BenefitStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BenefitStatuses.
     */
    cursor?: BenefitStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenefitStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenefitStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BenefitStatuses.
     */
    distinct?: BenefitStatusScalarFieldEnum | BenefitStatusScalarFieldEnum[]
  }

  /**
   * BenefitStatus findFirstOrThrow
   */
  export type BenefitStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * Filter, which BenefitStatus to fetch.
     */
    where?: BenefitStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenefitStatuses to fetch.
     */
    orderBy?: BenefitStatusOrderByWithRelationInput | BenefitStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BenefitStatuses.
     */
    cursor?: BenefitStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenefitStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenefitStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BenefitStatuses.
     */
    distinct?: BenefitStatusScalarFieldEnum | BenefitStatusScalarFieldEnum[]
  }

  /**
   * BenefitStatus findMany
   */
  export type BenefitStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * Filter, which BenefitStatuses to fetch.
     */
    where?: BenefitStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BenefitStatuses to fetch.
     */
    orderBy?: BenefitStatusOrderByWithRelationInput | BenefitStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BenefitStatuses.
     */
    cursor?: BenefitStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BenefitStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BenefitStatuses.
     */
    skip?: number
    distinct?: BenefitStatusScalarFieldEnum | BenefitStatusScalarFieldEnum[]
  }

  /**
   * BenefitStatus create
   */
  export type BenefitStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a BenefitStatus.
     */
    data: XOR<BenefitStatusCreateInput, BenefitStatusUncheckedCreateInput>
  }

  /**
   * BenefitStatus createMany
   */
  export type BenefitStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BenefitStatuses.
     */
    data: BenefitStatusCreateManyInput | BenefitStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BenefitStatus createManyAndReturn
   */
  export type BenefitStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * The data used to create many BenefitStatuses.
     */
    data: BenefitStatusCreateManyInput | BenefitStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BenefitStatus update
   */
  export type BenefitStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a BenefitStatus.
     */
    data: XOR<BenefitStatusUpdateInput, BenefitStatusUncheckedUpdateInput>
    /**
     * Choose, which BenefitStatus to update.
     */
    where: BenefitStatusWhereUniqueInput
  }

  /**
   * BenefitStatus updateMany
   */
  export type BenefitStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BenefitStatuses.
     */
    data: XOR<BenefitStatusUpdateManyMutationInput, BenefitStatusUncheckedUpdateManyInput>
    /**
     * Filter which BenefitStatuses to update
     */
    where?: BenefitStatusWhereInput
    /**
     * Limit how many BenefitStatuses to update.
     */
    limit?: number
  }

  /**
   * BenefitStatus updateManyAndReturn
   */
  export type BenefitStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * The data used to update BenefitStatuses.
     */
    data: XOR<BenefitStatusUpdateManyMutationInput, BenefitStatusUncheckedUpdateManyInput>
    /**
     * Filter which BenefitStatuses to update
     */
    where?: BenefitStatusWhereInput
    /**
     * Limit how many BenefitStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BenefitStatus upsert
   */
  export type BenefitStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the BenefitStatus to update in case it exists.
     */
    where: BenefitStatusWhereUniqueInput
    /**
     * In case the BenefitStatus found by the `where` argument doesn't exist, create a new BenefitStatus with this data.
     */
    create: XOR<BenefitStatusCreateInput, BenefitStatusUncheckedCreateInput>
    /**
     * In case the BenefitStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BenefitStatusUpdateInput, BenefitStatusUncheckedUpdateInput>
  }

  /**
   * BenefitStatus delete
   */
  export type BenefitStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
    /**
     * Filter which BenefitStatus to delete.
     */
    where: BenefitStatusWhereUniqueInput
  }

  /**
   * BenefitStatus deleteMany
   */
  export type BenefitStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BenefitStatuses to delete
     */
    where?: BenefitStatusWhereInput
    /**
     * Limit how many BenefitStatuses to delete.
     */
    limit?: number
  }

  /**
   * BenefitStatus without action
   */
  export type BenefitStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BenefitStatus
     */
    select?: BenefitStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BenefitStatus
     */
    omit?: BenefitStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BenefitStatusInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    notifyNewBenefit: 'notifyNewBenefit',
    notifyBenefitExpiration: 'notifyBenefitExpiration',
    notifyExpirationDays: 'notifyExpirationDays',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const CreditCardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    issuer: 'issuer',
    cardNumber: 'cardNumber',
    expiryDate: 'expiryDate',
    openedDate: 'openedDate',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditCardScalarFieldEnum = (typeof CreditCardScalarFieldEnum)[keyof typeof CreditCardScalarFieldEnum]


  export const BenefitScalarFieldEnum: {
    id: 'id',
    category: 'category',
    description: 'description',
    percentage: 'percentage',
    maxAmount: 'maxAmount',
    startDate: 'startDate',
    endDate: 'endDate',
    frequency: 'frequency',
    creditCardId: 'creditCardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BenefitScalarFieldEnum = (typeof BenefitScalarFieldEnum)[keyof typeof BenefitScalarFieldEnum]


  export const PredefinedCardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    issuer: 'issuer',
    annualFee: 'annualFee',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PredefinedCardScalarFieldEnum = (typeof PredefinedCardScalarFieldEnum)[keyof typeof PredefinedCardScalarFieldEnum]


  export const PredefinedBenefitScalarFieldEnum: {
    id: 'id',
    category: 'category',
    description: 'description',
    percentage: 'percentage',
    maxAmount: 'maxAmount',
    frequency: 'frequency',
    predefinedCardId: 'predefinedCardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PredefinedBenefitScalarFieldEnum = (typeof PredefinedBenefitScalarFieldEnum)[keyof typeof PredefinedBenefitScalarFieldEnum]


  export const BenefitStatusScalarFieldEnum: {
    id: 'id',
    benefitId: 'benefitId',
    userId: 'userId',
    cycleStartDate: 'cycleStartDate',
    cycleEndDate: 'cycleEndDate',
    isCompleted: 'isCompleted',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BenefitStatusScalarFieldEnum = (typeof BenefitStatusScalarFieldEnum)[keyof typeof BenefitStatusScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BenefitFrequency'
   */
  export type EnumBenefitFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BenefitFrequency'>
    


  /**
   * Reference to a field of type 'BenefitFrequency[]'
   */
  export type ListEnumBenefitFrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BenefitFrequency[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    notifyNewBenefit?: BoolFilter<"User"> | boolean
    notifyBenefitExpiration?: BoolFilter<"User"> | boolean
    notifyExpirationDays?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    creditCards?: CreditCardListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    benefitStatuses?: BenefitStatusListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    notifyNewBenefit?: SortOrder
    notifyBenefitExpiration?: SortOrder
    notifyExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditCards?: CreditCardOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    benefitStatuses?: BenefitStatusOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    notifyNewBenefit?: BoolFilter<"User"> | boolean
    notifyBenefitExpiration?: BoolFilter<"User"> | boolean
    notifyExpirationDays?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    creditCards?: CreditCardListRelationFilter
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    benefitStatuses?: BenefitStatusListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    notifyNewBenefit?: SortOrder
    notifyBenefitExpiration?: SortOrder
    notifyExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    notifyNewBenefit?: BoolWithAggregatesFilter<"User"> | boolean
    notifyBenefitExpiration?: BoolWithAggregatesFilter<"User"> | boolean
    notifyExpirationDays?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type CreditCardWhereInput = {
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    id?: StringFilter<"CreditCard"> | string
    name?: StringFilter<"CreditCard"> | string
    issuer?: StringFilter<"CreditCard"> | string
    cardNumber?: StringNullableFilter<"CreditCard"> | string | null
    expiryDate?: DateTimeNullableFilter<"CreditCard"> | Date | string | null
    openedDate?: DateTimeNullableFilter<"CreditCard"> | Date | string | null
    userId?: StringFilter<"CreditCard"> | string
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    benefits?: BenefitListRelationFilter
  }

  export type CreditCardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    cardNumber?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    openedDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    benefits?: BenefitOrderByRelationAggregateInput
  }

  export type CreditCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    name?: StringFilter<"CreditCard"> | string
    issuer?: StringFilter<"CreditCard"> | string
    cardNumber?: StringNullableFilter<"CreditCard"> | string | null
    expiryDate?: DateTimeNullableFilter<"CreditCard"> | Date | string | null
    openedDate?: DateTimeNullableFilter<"CreditCard"> | Date | string | null
    userId?: StringFilter<"CreditCard"> | string
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    benefits?: BenefitListRelationFilter
  }, "id">

  export type CreditCardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    cardNumber?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    openedDate?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditCardCountOrderByAggregateInput
    _max?: CreditCardMaxOrderByAggregateInput
    _min?: CreditCardMinOrderByAggregateInput
  }

  export type CreditCardScalarWhereWithAggregatesInput = {
    AND?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    OR?: CreditCardScalarWhereWithAggregatesInput[]
    NOT?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditCard"> | string
    name?: StringWithAggregatesFilter<"CreditCard"> | string
    issuer?: StringWithAggregatesFilter<"CreditCard"> | string
    cardNumber?: StringNullableWithAggregatesFilter<"CreditCard"> | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"CreditCard"> | Date | string | null
    openedDate?: DateTimeNullableWithAggregatesFilter<"CreditCard"> | Date | string | null
    userId?: StringWithAggregatesFilter<"CreditCard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
  }

  export type BenefitWhereInput = {
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    id?: StringFilter<"Benefit"> | string
    category?: StringFilter<"Benefit"> | string
    description?: StringFilter<"Benefit"> | string
    percentage?: FloatFilter<"Benefit"> | number
    maxAmount?: FloatNullableFilter<"Benefit"> | number | null
    startDate?: DateTimeFilter<"Benefit"> | Date | string
    endDate?: DateTimeNullableFilter<"Benefit"> | Date | string | null
    frequency?: EnumBenefitFrequencyFilter<"Benefit"> | $Enums.BenefitFrequency
    creditCardId?: StringFilter<"Benefit"> | string
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    creditCard?: XOR<CreditCardScalarRelationFilter, CreditCardWhereInput>
    benefitStatuses?: BenefitStatusListRelationFilter
  }

  export type BenefitOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    frequency?: SortOrder
    creditCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creditCard?: CreditCardOrderByWithRelationInput
    benefitStatuses?: BenefitStatusOrderByRelationAggregateInput
  }

  export type BenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BenefitWhereInput | BenefitWhereInput[]
    OR?: BenefitWhereInput[]
    NOT?: BenefitWhereInput | BenefitWhereInput[]
    category?: StringFilter<"Benefit"> | string
    description?: StringFilter<"Benefit"> | string
    percentage?: FloatFilter<"Benefit"> | number
    maxAmount?: FloatNullableFilter<"Benefit"> | number | null
    startDate?: DateTimeFilter<"Benefit"> | Date | string
    endDate?: DateTimeNullableFilter<"Benefit"> | Date | string | null
    frequency?: EnumBenefitFrequencyFilter<"Benefit"> | $Enums.BenefitFrequency
    creditCardId?: StringFilter<"Benefit"> | string
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
    creditCard?: XOR<CreditCardScalarRelationFilter, CreditCardWhereInput>
    benefitStatuses?: BenefitStatusListRelationFilter
  }, "id">

  export type BenefitOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    frequency?: SortOrder
    creditCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BenefitCountOrderByAggregateInput
    _avg?: BenefitAvgOrderByAggregateInput
    _max?: BenefitMaxOrderByAggregateInput
    _min?: BenefitMinOrderByAggregateInput
    _sum?: BenefitSumOrderByAggregateInput
  }

  export type BenefitScalarWhereWithAggregatesInput = {
    AND?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    OR?: BenefitScalarWhereWithAggregatesInput[]
    NOT?: BenefitScalarWhereWithAggregatesInput | BenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Benefit"> | string
    category?: StringWithAggregatesFilter<"Benefit"> | string
    description?: StringWithAggregatesFilter<"Benefit"> | string
    percentage?: FloatWithAggregatesFilter<"Benefit"> | number
    maxAmount?: FloatNullableWithAggregatesFilter<"Benefit"> | number | null
    startDate?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Benefit"> | Date | string | null
    frequency?: EnumBenefitFrequencyWithAggregatesFilter<"Benefit"> | $Enums.BenefitFrequency
    creditCardId?: StringWithAggregatesFilter<"Benefit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Benefit"> | Date | string
  }

  export type PredefinedCardWhereInput = {
    AND?: PredefinedCardWhereInput | PredefinedCardWhereInput[]
    OR?: PredefinedCardWhereInput[]
    NOT?: PredefinedCardWhereInput | PredefinedCardWhereInput[]
    id?: StringFilter<"PredefinedCard"> | string
    name?: StringFilter<"PredefinedCard"> | string
    issuer?: StringFilter<"PredefinedCard"> | string
    annualFee?: FloatFilter<"PredefinedCard"> | number
    imageUrl?: StringNullableFilter<"PredefinedCard"> | string | null
    createdAt?: DateTimeFilter<"PredefinedCard"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedCard"> | Date | string
    benefits?: PredefinedBenefitListRelationFilter
  }

  export type PredefinedCardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    annualFee?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    benefits?: PredefinedBenefitOrderByRelationAggregateInput
  }

  export type PredefinedCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PredefinedCardWhereInput | PredefinedCardWhereInput[]
    OR?: PredefinedCardWhereInput[]
    NOT?: PredefinedCardWhereInput | PredefinedCardWhereInput[]
    issuer?: StringFilter<"PredefinedCard"> | string
    annualFee?: FloatFilter<"PredefinedCard"> | number
    imageUrl?: StringNullableFilter<"PredefinedCard"> | string | null
    createdAt?: DateTimeFilter<"PredefinedCard"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedCard"> | Date | string
    benefits?: PredefinedBenefitListRelationFilter
  }, "id" | "name">

  export type PredefinedCardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    annualFee?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PredefinedCardCountOrderByAggregateInput
    _avg?: PredefinedCardAvgOrderByAggregateInput
    _max?: PredefinedCardMaxOrderByAggregateInput
    _min?: PredefinedCardMinOrderByAggregateInput
    _sum?: PredefinedCardSumOrderByAggregateInput
  }

  export type PredefinedCardScalarWhereWithAggregatesInput = {
    AND?: PredefinedCardScalarWhereWithAggregatesInput | PredefinedCardScalarWhereWithAggregatesInput[]
    OR?: PredefinedCardScalarWhereWithAggregatesInput[]
    NOT?: PredefinedCardScalarWhereWithAggregatesInput | PredefinedCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PredefinedCard"> | string
    name?: StringWithAggregatesFilter<"PredefinedCard"> | string
    issuer?: StringWithAggregatesFilter<"PredefinedCard"> | string
    annualFee?: FloatWithAggregatesFilter<"PredefinedCard"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"PredefinedCard"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PredefinedCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PredefinedCard"> | Date | string
  }

  export type PredefinedBenefitWhereInput = {
    AND?: PredefinedBenefitWhereInput | PredefinedBenefitWhereInput[]
    OR?: PredefinedBenefitWhereInput[]
    NOT?: PredefinedBenefitWhereInput | PredefinedBenefitWhereInput[]
    id?: StringFilter<"PredefinedBenefit"> | string
    category?: StringFilter<"PredefinedBenefit"> | string
    description?: StringFilter<"PredefinedBenefit"> | string
    percentage?: FloatFilter<"PredefinedBenefit"> | number
    maxAmount?: FloatNullableFilter<"PredefinedBenefit"> | number | null
    frequency?: EnumBenefitFrequencyFilter<"PredefinedBenefit"> | $Enums.BenefitFrequency
    predefinedCardId?: StringFilter<"PredefinedBenefit"> | string
    createdAt?: DateTimeFilter<"PredefinedBenefit"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedBenefit"> | Date | string
    predefinedCard?: XOR<PredefinedCardScalarRelationFilter, PredefinedCardWhereInput>
  }

  export type PredefinedBenefitOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    frequency?: SortOrder
    predefinedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    predefinedCard?: PredefinedCardOrderByWithRelationInput
  }

  export type PredefinedBenefitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PredefinedBenefitWhereInput | PredefinedBenefitWhereInput[]
    OR?: PredefinedBenefitWhereInput[]
    NOT?: PredefinedBenefitWhereInput | PredefinedBenefitWhereInput[]
    category?: StringFilter<"PredefinedBenefit"> | string
    description?: StringFilter<"PredefinedBenefit"> | string
    percentage?: FloatFilter<"PredefinedBenefit"> | number
    maxAmount?: FloatNullableFilter<"PredefinedBenefit"> | number | null
    frequency?: EnumBenefitFrequencyFilter<"PredefinedBenefit"> | $Enums.BenefitFrequency
    predefinedCardId?: StringFilter<"PredefinedBenefit"> | string
    createdAt?: DateTimeFilter<"PredefinedBenefit"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedBenefit"> | Date | string
    predefinedCard?: XOR<PredefinedCardScalarRelationFilter, PredefinedCardWhereInput>
  }, "id">

  export type PredefinedBenefitOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrderInput | SortOrder
    frequency?: SortOrder
    predefinedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PredefinedBenefitCountOrderByAggregateInput
    _avg?: PredefinedBenefitAvgOrderByAggregateInput
    _max?: PredefinedBenefitMaxOrderByAggregateInput
    _min?: PredefinedBenefitMinOrderByAggregateInput
    _sum?: PredefinedBenefitSumOrderByAggregateInput
  }

  export type PredefinedBenefitScalarWhereWithAggregatesInput = {
    AND?: PredefinedBenefitScalarWhereWithAggregatesInput | PredefinedBenefitScalarWhereWithAggregatesInput[]
    OR?: PredefinedBenefitScalarWhereWithAggregatesInput[]
    NOT?: PredefinedBenefitScalarWhereWithAggregatesInput | PredefinedBenefitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PredefinedBenefit"> | string
    category?: StringWithAggregatesFilter<"PredefinedBenefit"> | string
    description?: StringWithAggregatesFilter<"PredefinedBenefit"> | string
    percentage?: FloatWithAggregatesFilter<"PredefinedBenefit"> | number
    maxAmount?: FloatNullableWithAggregatesFilter<"PredefinedBenefit"> | number | null
    frequency?: EnumBenefitFrequencyWithAggregatesFilter<"PredefinedBenefit"> | $Enums.BenefitFrequency
    predefinedCardId?: StringWithAggregatesFilter<"PredefinedBenefit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PredefinedBenefit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PredefinedBenefit"> | Date | string
  }

  export type BenefitStatusWhereInput = {
    AND?: BenefitStatusWhereInput | BenefitStatusWhereInput[]
    OR?: BenefitStatusWhereInput[]
    NOT?: BenefitStatusWhereInput | BenefitStatusWhereInput[]
    id?: StringFilter<"BenefitStatus"> | string
    benefitId?: StringFilter<"BenefitStatus"> | string
    userId?: StringFilter<"BenefitStatus"> | string
    cycleStartDate?: DateTimeFilter<"BenefitStatus"> | Date | string
    cycleEndDate?: DateTimeFilter<"BenefitStatus"> | Date | string
    isCompleted?: BoolFilter<"BenefitStatus"> | boolean
    completedAt?: DateTimeNullableFilter<"BenefitStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"BenefitStatus"> | Date | string
    updatedAt?: DateTimeFilter<"BenefitStatus"> | Date | string
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BenefitStatusOrderByWithRelationInput = {
    id?: SortOrder
    benefitId?: SortOrder
    userId?: SortOrder
    cycleStartDate?: SortOrder
    cycleEndDate?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    benefit?: BenefitOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BenefitStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    benefitId_userId_cycleStartDate?: BenefitStatusBenefitIdUserIdCycleStartDateCompoundUniqueInput
    AND?: BenefitStatusWhereInput | BenefitStatusWhereInput[]
    OR?: BenefitStatusWhereInput[]
    NOT?: BenefitStatusWhereInput | BenefitStatusWhereInput[]
    benefitId?: StringFilter<"BenefitStatus"> | string
    userId?: StringFilter<"BenefitStatus"> | string
    cycleStartDate?: DateTimeFilter<"BenefitStatus"> | Date | string
    cycleEndDate?: DateTimeFilter<"BenefitStatus"> | Date | string
    isCompleted?: BoolFilter<"BenefitStatus"> | boolean
    completedAt?: DateTimeNullableFilter<"BenefitStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"BenefitStatus"> | Date | string
    updatedAt?: DateTimeFilter<"BenefitStatus"> | Date | string
    benefit?: XOR<BenefitScalarRelationFilter, BenefitWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "benefitId_userId_cycleStartDate">

  export type BenefitStatusOrderByWithAggregationInput = {
    id?: SortOrder
    benefitId?: SortOrder
    userId?: SortOrder
    cycleStartDate?: SortOrder
    cycleEndDate?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BenefitStatusCountOrderByAggregateInput
    _max?: BenefitStatusMaxOrderByAggregateInput
    _min?: BenefitStatusMinOrderByAggregateInput
  }

  export type BenefitStatusScalarWhereWithAggregatesInput = {
    AND?: BenefitStatusScalarWhereWithAggregatesInput | BenefitStatusScalarWhereWithAggregatesInput[]
    OR?: BenefitStatusScalarWhereWithAggregatesInput[]
    NOT?: BenefitStatusScalarWhereWithAggregatesInput | BenefitStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BenefitStatus"> | string
    benefitId?: StringWithAggregatesFilter<"BenefitStatus"> | string
    userId?: StringWithAggregatesFilter<"BenefitStatus"> | string
    cycleStartDate?: DateTimeWithAggregatesFilter<"BenefitStatus"> | Date | string
    cycleEndDate?: DateTimeWithAggregatesFilter<"BenefitStatus"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"BenefitStatus"> | boolean
    completedAt?: DateTimeNullableWithAggregatesFilter<"BenefitStatus"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BenefitStatus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BenefitStatus"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditCardsInput
    benefits?: BenefitCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardUncheckedCreateInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: BenefitUncheckedCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditCardsNestedInput
    benefits?: BenefitUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: BenefitUncheckedUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardCreateManyInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCard: CreditCardCreateNestedOneWithoutBenefitsInput
    benefitStatuses?: BenefitStatusCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    creditCardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    benefitStatuses?: BenefitStatusUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCard?: CreditCardUpdateOneRequiredWithoutBenefitsNestedInput
    benefitStatuses?: BenefitStatusUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    creditCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefitStatuses?: BenefitStatusUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitCreateManyInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    creditCardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    creditCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedCardCreateInput = {
    id?: string
    name: string
    issuer: string
    annualFee: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: PredefinedBenefitCreateNestedManyWithoutPredefinedCardInput
  }

  export type PredefinedCardUncheckedCreateInput = {
    id?: string
    name: string
    issuer: string
    annualFee: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: PredefinedBenefitUncheckedCreateNestedManyWithoutPredefinedCardInput
  }

  export type PredefinedCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    annualFee?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: PredefinedBenefitUpdateManyWithoutPredefinedCardNestedInput
  }

  export type PredefinedCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    annualFee?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: PredefinedBenefitUncheckedUpdateManyWithoutPredefinedCardNestedInput
  }

  export type PredefinedCardCreateManyInput = {
    id?: string
    name: string
    issuer: string
    annualFee: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    annualFee?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    annualFee?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedBenefitCreateInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    predefinedCard: PredefinedCardCreateNestedOneWithoutBenefitsInput
  }

  export type PredefinedBenefitUncheckedCreateInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    frequency?: $Enums.BenefitFrequency
    predefinedCardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedBenefitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    predefinedCard?: PredefinedCardUpdateOneRequiredWithoutBenefitsNestedInput
  }

  export type PredefinedBenefitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    predefinedCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedBenefitCreateManyInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    frequency?: $Enums.BenefitFrequency
    predefinedCardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedBenefitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedBenefitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    predefinedCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusCreateInput = {
    id?: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefit: BenefitCreateNestedOneWithoutBenefitStatusesInput
    user: UserCreateNestedOneWithoutBenefitStatusesInput
  }

  export type BenefitStatusUncheckedCreateInput = {
    id?: string
    benefitId: string
    userId: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefit?: BenefitUpdateOneRequiredWithoutBenefitStatusesNestedInput
    user?: UserUpdateOneRequiredWithoutBenefitStatusesNestedInput
  }

  export type BenefitStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    benefitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusCreateManyInput = {
    id?: string
    benefitId: string
    userId: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    benefitId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CreditCardListRelationFilter = {
    every?: CreditCardWhereInput
    some?: CreditCardWhereInput
    none?: CreditCardWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type BenefitStatusListRelationFilter = {
    every?: BenefitStatusWhereInput
    some?: BenefitStatusWhereInput
    none?: BenefitStatusWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CreditCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BenefitStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    notifyNewBenefit?: SortOrder
    notifyBenefitExpiration?: SortOrder
    notifyExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    notifyExpirationDays?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    notifyNewBenefit?: SortOrder
    notifyBenefitExpiration?: SortOrder
    notifyExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    notifyNewBenefit?: SortOrder
    notifyBenefitExpiration?: SortOrder
    notifyExpirationDays?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    notifyExpirationDays?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type BenefitListRelationFilter = {
    every?: BenefitWhereInput
    some?: BenefitWhereInput
    none?: BenefitWhereInput
  }

  export type BenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreditCardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    cardNumber?: SortOrder
    expiryDate?: SortOrder
    openedDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    cardNumber?: SortOrder
    expiryDate?: SortOrder
    openedDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    cardNumber?: SortOrder
    expiryDate?: SortOrder
    openedDate?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumBenefitFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitFrequency | EnumBenefitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitFrequencyFilter<$PrismaModel> | $Enums.BenefitFrequency
  }

  export type CreditCardScalarRelationFilter = {
    is?: CreditCardWhereInput
    isNot?: CreditCardWhereInput
  }

  export type BenefitCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    creditCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitAvgOrderByAggregateInput = {
    percentage?: SortOrder
    maxAmount?: SortOrder
  }

  export type BenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    creditCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    frequency?: SortOrder
    creditCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitSumOrderByAggregateInput = {
    percentage?: SortOrder
    maxAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumBenefitFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitFrequency | EnumBenefitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.BenefitFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBenefitFrequencyFilter<$PrismaModel>
    _max?: NestedEnumBenefitFrequencyFilter<$PrismaModel>
  }

  export type PredefinedBenefitListRelationFilter = {
    every?: PredefinedBenefitWhereInput
    some?: PredefinedBenefitWhereInput
    none?: PredefinedBenefitWhereInput
  }

  export type PredefinedBenefitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PredefinedCardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    annualFee?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedCardAvgOrderByAggregateInput = {
    annualFee?: SortOrder
  }

  export type PredefinedCardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    annualFee?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedCardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    annualFee?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedCardSumOrderByAggregateInput = {
    annualFee?: SortOrder
  }

  export type PredefinedCardScalarRelationFilter = {
    is?: PredefinedCardWhereInput
    isNot?: PredefinedCardWhereInput
  }

  export type PredefinedBenefitCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrder
    frequency?: SortOrder
    predefinedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedBenefitAvgOrderByAggregateInput = {
    percentage?: SortOrder
    maxAmount?: SortOrder
  }

  export type PredefinedBenefitMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrder
    frequency?: SortOrder
    predefinedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedBenefitMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    description?: SortOrder
    percentage?: SortOrder
    maxAmount?: SortOrder
    frequency?: SortOrder
    predefinedCardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredefinedBenefitSumOrderByAggregateInput = {
    percentage?: SortOrder
    maxAmount?: SortOrder
  }

  export type BenefitScalarRelationFilter = {
    is?: BenefitWhereInput
    isNot?: BenefitWhereInput
  }

  export type BenefitStatusBenefitIdUserIdCycleStartDateCompoundUniqueInput = {
    benefitId: string
    userId: string
    cycleStartDate: Date | string
  }

  export type BenefitStatusCountOrderByAggregateInput = {
    id?: SortOrder
    benefitId?: SortOrder
    userId?: SortOrder
    cycleStartDate?: SortOrder
    cycleEndDate?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    benefitId?: SortOrder
    userId?: SortOrder
    cycleStartDate?: SortOrder
    cycleEndDate?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BenefitStatusMinOrderByAggregateInput = {
    id?: SortOrder
    benefitId?: SortOrder
    userId?: SortOrder
    cycleStartDate?: SortOrder
    cycleEndDate?: SortOrder
    isCompleted?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BenefitStatusCreateNestedManyWithoutUserInput = {
    create?: XOR<BenefitStatusCreateWithoutUserInput, BenefitStatusUncheckedCreateWithoutUserInput> | BenefitStatusCreateWithoutUserInput[] | BenefitStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutUserInput | BenefitStatusCreateOrConnectWithoutUserInput[]
    createMany?: BenefitStatusCreateManyUserInputEnvelope
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
  }

  export type CreditCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type BenefitStatusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BenefitStatusCreateWithoutUserInput, BenefitStatusUncheckedCreateWithoutUserInput> | BenefitStatusCreateWithoutUserInput[] | BenefitStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutUserInput | BenefitStatusCreateOrConnectWithoutUserInput[]
    createMany?: BenefitStatusCreateManyUserInputEnvelope
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CreditCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutUserInput | CreditCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutUserInput | CreditCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutUserInput | CreditCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BenefitStatusUpdateManyWithoutUserNestedInput = {
    create?: XOR<BenefitStatusCreateWithoutUserInput, BenefitStatusUncheckedCreateWithoutUserInput> | BenefitStatusCreateWithoutUserInput[] | BenefitStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutUserInput | BenefitStatusCreateOrConnectWithoutUserInput[]
    upsert?: BenefitStatusUpsertWithWhereUniqueWithoutUserInput | BenefitStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BenefitStatusCreateManyUserInputEnvelope
    set?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    disconnect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    delete?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    update?: BenefitStatusUpdateWithWhereUniqueWithoutUserInput | BenefitStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BenefitStatusUpdateManyWithWhereWithoutUserInput | BenefitStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BenefitStatusScalarWhereInput | BenefitStatusScalarWhereInput[]
  }

  export type CreditCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput> | CreditCardCreateWithoutUserInput[] | CreditCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CreditCardCreateOrConnectWithoutUserInput | CreditCardCreateOrConnectWithoutUserInput[]
    upsert?: CreditCardUpsertWithWhereUniqueWithoutUserInput | CreditCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CreditCardCreateManyUserInputEnvelope
    set?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    disconnect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    delete?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    connect?: CreditCardWhereUniqueInput | CreditCardWhereUniqueInput[]
    update?: CreditCardUpdateWithWhereUniqueWithoutUserInput | CreditCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CreditCardUpdateManyWithWhereWithoutUserInput | CreditCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type BenefitStatusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BenefitStatusCreateWithoutUserInput, BenefitStatusUncheckedCreateWithoutUserInput> | BenefitStatusCreateWithoutUserInput[] | BenefitStatusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutUserInput | BenefitStatusCreateOrConnectWithoutUserInput[]
    upsert?: BenefitStatusUpsertWithWhereUniqueWithoutUserInput | BenefitStatusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BenefitStatusCreateManyUserInputEnvelope
    set?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    disconnect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    delete?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    update?: BenefitStatusUpdateWithWhereUniqueWithoutUserInput | BenefitStatusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BenefitStatusUpdateManyWithWhereWithoutUserInput | BenefitStatusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BenefitStatusScalarWhereInput | BenefitStatusScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutCreditCardsInput = {
    create?: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditCardsInput
    connect?: UserWhereUniqueInput
  }

  export type BenefitCreateNestedManyWithoutCreditCardInput = {
    create?: XOR<BenefitCreateWithoutCreditCardInput, BenefitUncheckedCreateWithoutCreditCardInput> | BenefitCreateWithoutCreditCardInput[] | BenefitUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: BenefitCreateOrConnectWithoutCreditCardInput | BenefitCreateOrConnectWithoutCreditCardInput[]
    createMany?: BenefitCreateManyCreditCardInputEnvelope
    connect?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
  }

  export type BenefitUncheckedCreateNestedManyWithoutCreditCardInput = {
    create?: XOR<BenefitCreateWithoutCreditCardInput, BenefitUncheckedCreateWithoutCreditCardInput> | BenefitCreateWithoutCreditCardInput[] | BenefitUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: BenefitCreateOrConnectWithoutCreditCardInput | BenefitCreateOrConnectWithoutCreditCardInput[]
    createMany?: BenefitCreateManyCreditCardInputEnvelope
    connect?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreditCardsNestedInput = {
    create?: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreditCardsInput
    upsert?: UserUpsertWithoutCreditCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreditCardsInput, UserUpdateWithoutCreditCardsInput>, UserUncheckedUpdateWithoutCreditCardsInput>
  }

  export type BenefitUpdateManyWithoutCreditCardNestedInput = {
    create?: XOR<BenefitCreateWithoutCreditCardInput, BenefitUncheckedCreateWithoutCreditCardInput> | BenefitCreateWithoutCreditCardInput[] | BenefitUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: BenefitCreateOrConnectWithoutCreditCardInput | BenefitCreateOrConnectWithoutCreditCardInput[]
    upsert?: BenefitUpsertWithWhereUniqueWithoutCreditCardInput | BenefitUpsertWithWhereUniqueWithoutCreditCardInput[]
    createMany?: BenefitCreateManyCreditCardInputEnvelope
    set?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    disconnect?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    delete?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    connect?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    update?: BenefitUpdateWithWhereUniqueWithoutCreditCardInput | BenefitUpdateWithWhereUniqueWithoutCreditCardInput[]
    updateMany?: BenefitUpdateManyWithWhereWithoutCreditCardInput | BenefitUpdateManyWithWhereWithoutCreditCardInput[]
    deleteMany?: BenefitScalarWhereInput | BenefitScalarWhereInput[]
  }

  export type BenefitUncheckedUpdateManyWithoutCreditCardNestedInput = {
    create?: XOR<BenefitCreateWithoutCreditCardInput, BenefitUncheckedCreateWithoutCreditCardInput> | BenefitCreateWithoutCreditCardInput[] | BenefitUncheckedCreateWithoutCreditCardInput[]
    connectOrCreate?: BenefitCreateOrConnectWithoutCreditCardInput | BenefitCreateOrConnectWithoutCreditCardInput[]
    upsert?: BenefitUpsertWithWhereUniqueWithoutCreditCardInput | BenefitUpsertWithWhereUniqueWithoutCreditCardInput[]
    createMany?: BenefitCreateManyCreditCardInputEnvelope
    set?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    disconnect?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    delete?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    connect?: BenefitWhereUniqueInput | BenefitWhereUniqueInput[]
    update?: BenefitUpdateWithWhereUniqueWithoutCreditCardInput | BenefitUpdateWithWhereUniqueWithoutCreditCardInput[]
    updateMany?: BenefitUpdateManyWithWhereWithoutCreditCardInput | BenefitUpdateManyWithWhereWithoutCreditCardInput[]
    deleteMany?: BenefitScalarWhereInput | BenefitScalarWhereInput[]
  }

  export type CreditCardCreateNestedOneWithoutBenefitsInput = {
    create?: XOR<CreditCardCreateWithoutBenefitsInput, CreditCardUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutBenefitsInput
    connect?: CreditCardWhereUniqueInput
  }

  export type BenefitStatusCreateNestedManyWithoutBenefitInput = {
    create?: XOR<BenefitStatusCreateWithoutBenefitInput, BenefitStatusUncheckedCreateWithoutBenefitInput> | BenefitStatusCreateWithoutBenefitInput[] | BenefitStatusUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutBenefitInput | BenefitStatusCreateOrConnectWithoutBenefitInput[]
    createMany?: BenefitStatusCreateManyBenefitInputEnvelope
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
  }

  export type BenefitStatusUncheckedCreateNestedManyWithoutBenefitInput = {
    create?: XOR<BenefitStatusCreateWithoutBenefitInput, BenefitStatusUncheckedCreateWithoutBenefitInput> | BenefitStatusCreateWithoutBenefitInput[] | BenefitStatusUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutBenefitInput | BenefitStatusCreateOrConnectWithoutBenefitInput[]
    createMany?: BenefitStatusCreateManyBenefitInputEnvelope
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumBenefitFrequencyFieldUpdateOperationsInput = {
    set?: $Enums.BenefitFrequency
  }

  export type CreditCardUpdateOneRequiredWithoutBenefitsNestedInput = {
    create?: XOR<CreditCardCreateWithoutBenefitsInput, CreditCardUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutBenefitsInput
    upsert?: CreditCardUpsertWithoutBenefitsInput
    connect?: CreditCardWhereUniqueInput
    update?: XOR<XOR<CreditCardUpdateToOneWithWhereWithoutBenefitsInput, CreditCardUpdateWithoutBenefitsInput>, CreditCardUncheckedUpdateWithoutBenefitsInput>
  }

  export type BenefitStatusUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<BenefitStatusCreateWithoutBenefitInput, BenefitStatusUncheckedCreateWithoutBenefitInput> | BenefitStatusCreateWithoutBenefitInput[] | BenefitStatusUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutBenefitInput | BenefitStatusCreateOrConnectWithoutBenefitInput[]
    upsert?: BenefitStatusUpsertWithWhereUniqueWithoutBenefitInput | BenefitStatusUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: BenefitStatusCreateManyBenefitInputEnvelope
    set?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    disconnect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    delete?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    update?: BenefitStatusUpdateWithWhereUniqueWithoutBenefitInput | BenefitStatusUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: BenefitStatusUpdateManyWithWhereWithoutBenefitInput | BenefitStatusUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: BenefitStatusScalarWhereInput | BenefitStatusScalarWhereInput[]
  }

  export type BenefitStatusUncheckedUpdateManyWithoutBenefitNestedInput = {
    create?: XOR<BenefitStatusCreateWithoutBenefitInput, BenefitStatusUncheckedCreateWithoutBenefitInput> | BenefitStatusCreateWithoutBenefitInput[] | BenefitStatusUncheckedCreateWithoutBenefitInput[]
    connectOrCreate?: BenefitStatusCreateOrConnectWithoutBenefitInput | BenefitStatusCreateOrConnectWithoutBenefitInput[]
    upsert?: BenefitStatusUpsertWithWhereUniqueWithoutBenefitInput | BenefitStatusUpsertWithWhereUniqueWithoutBenefitInput[]
    createMany?: BenefitStatusCreateManyBenefitInputEnvelope
    set?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    disconnect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    delete?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    connect?: BenefitStatusWhereUniqueInput | BenefitStatusWhereUniqueInput[]
    update?: BenefitStatusUpdateWithWhereUniqueWithoutBenefitInput | BenefitStatusUpdateWithWhereUniqueWithoutBenefitInput[]
    updateMany?: BenefitStatusUpdateManyWithWhereWithoutBenefitInput | BenefitStatusUpdateManyWithWhereWithoutBenefitInput[]
    deleteMany?: BenefitStatusScalarWhereInput | BenefitStatusScalarWhereInput[]
  }

  export type PredefinedBenefitCreateNestedManyWithoutPredefinedCardInput = {
    create?: XOR<PredefinedBenefitCreateWithoutPredefinedCardInput, PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput> | PredefinedBenefitCreateWithoutPredefinedCardInput[] | PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput[]
    connectOrCreate?: PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput | PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput[]
    createMany?: PredefinedBenefitCreateManyPredefinedCardInputEnvelope
    connect?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
  }

  export type PredefinedBenefitUncheckedCreateNestedManyWithoutPredefinedCardInput = {
    create?: XOR<PredefinedBenefitCreateWithoutPredefinedCardInput, PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput> | PredefinedBenefitCreateWithoutPredefinedCardInput[] | PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput[]
    connectOrCreate?: PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput | PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput[]
    createMany?: PredefinedBenefitCreateManyPredefinedCardInputEnvelope
    connect?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
  }

  export type PredefinedBenefitUpdateManyWithoutPredefinedCardNestedInput = {
    create?: XOR<PredefinedBenefitCreateWithoutPredefinedCardInput, PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput> | PredefinedBenefitCreateWithoutPredefinedCardInput[] | PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput[]
    connectOrCreate?: PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput | PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput[]
    upsert?: PredefinedBenefitUpsertWithWhereUniqueWithoutPredefinedCardInput | PredefinedBenefitUpsertWithWhereUniqueWithoutPredefinedCardInput[]
    createMany?: PredefinedBenefitCreateManyPredefinedCardInputEnvelope
    set?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    disconnect?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    delete?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    connect?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    update?: PredefinedBenefitUpdateWithWhereUniqueWithoutPredefinedCardInput | PredefinedBenefitUpdateWithWhereUniqueWithoutPredefinedCardInput[]
    updateMany?: PredefinedBenefitUpdateManyWithWhereWithoutPredefinedCardInput | PredefinedBenefitUpdateManyWithWhereWithoutPredefinedCardInput[]
    deleteMany?: PredefinedBenefitScalarWhereInput | PredefinedBenefitScalarWhereInput[]
  }

  export type PredefinedBenefitUncheckedUpdateManyWithoutPredefinedCardNestedInput = {
    create?: XOR<PredefinedBenefitCreateWithoutPredefinedCardInput, PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput> | PredefinedBenefitCreateWithoutPredefinedCardInput[] | PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput[]
    connectOrCreate?: PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput | PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput[]
    upsert?: PredefinedBenefitUpsertWithWhereUniqueWithoutPredefinedCardInput | PredefinedBenefitUpsertWithWhereUniqueWithoutPredefinedCardInput[]
    createMany?: PredefinedBenefitCreateManyPredefinedCardInputEnvelope
    set?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    disconnect?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    delete?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    connect?: PredefinedBenefitWhereUniqueInput | PredefinedBenefitWhereUniqueInput[]
    update?: PredefinedBenefitUpdateWithWhereUniqueWithoutPredefinedCardInput | PredefinedBenefitUpdateWithWhereUniqueWithoutPredefinedCardInput[]
    updateMany?: PredefinedBenefitUpdateManyWithWhereWithoutPredefinedCardInput | PredefinedBenefitUpdateManyWithWhereWithoutPredefinedCardInput[]
    deleteMany?: PredefinedBenefitScalarWhereInput | PredefinedBenefitScalarWhereInput[]
  }

  export type PredefinedCardCreateNestedOneWithoutBenefitsInput = {
    create?: XOR<PredefinedCardCreateWithoutBenefitsInput, PredefinedCardUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: PredefinedCardCreateOrConnectWithoutBenefitsInput
    connect?: PredefinedCardWhereUniqueInput
  }

  export type PredefinedCardUpdateOneRequiredWithoutBenefitsNestedInput = {
    create?: XOR<PredefinedCardCreateWithoutBenefitsInput, PredefinedCardUncheckedCreateWithoutBenefitsInput>
    connectOrCreate?: PredefinedCardCreateOrConnectWithoutBenefitsInput
    upsert?: PredefinedCardUpsertWithoutBenefitsInput
    connect?: PredefinedCardWhereUniqueInput
    update?: XOR<XOR<PredefinedCardUpdateToOneWithWhereWithoutBenefitsInput, PredefinedCardUpdateWithoutBenefitsInput>, PredefinedCardUncheckedUpdateWithoutBenefitsInput>
  }

  export type BenefitCreateNestedOneWithoutBenefitStatusesInput = {
    create?: XOR<BenefitCreateWithoutBenefitStatusesInput, BenefitUncheckedCreateWithoutBenefitStatusesInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutBenefitStatusesInput
    connect?: BenefitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBenefitStatusesInput = {
    create?: XOR<UserCreateWithoutBenefitStatusesInput, UserUncheckedCreateWithoutBenefitStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBenefitStatusesInput
    connect?: UserWhereUniqueInput
  }

  export type BenefitUpdateOneRequiredWithoutBenefitStatusesNestedInput = {
    create?: XOR<BenefitCreateWithoutBenefitStatusesInput, BenefitUncheckedCreateWithoutBenefitStatusesInput>
    connectOrCreate?: BenefitCreateOrConnectWithoutBenefitStatusesInput
    upsert?: BenefitUpsertWithoutBenefitStatusesInput
    connect?: BenefitWhereUniqueInput
    update?: XOR<XOR<BenefitUpdateToOneWithWhereWithoutBenefitStatusesInput, BenefitUpdateWithoutBenefitStatusesInput>, BenefitUncheckedUpdateWithoutBenefitStatusesInput>
  }

  export type UserUpdateOneRequiredWithoutBenefitStatusesNestedInput = {
    create?: XOR<UserCreateWithoutBenefitStatusesInput, UserUncheckedCreateWithoutBenefitStatusesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBenefitStatusesInput
    upsert?: UserUpsertWithoutBenefitStatusesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBenefitStatusesInput, UserUpdateWithoutBenefitStatusesInput>, UserUncheckedUpdateWithoutBenefitStatusesInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumBenefitFrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitFrequency | EnumBenefitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitFrequencyFilter<$PrismaModel> | $Enums.BenefitFrequency
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumBenefitFrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BenefitFrequency | EnumBenefitFrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.BenefitFrequency[] | ListEnumBenefitFrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumBenefitFrequencyWithAggregatesFilter<$PrismaModel> | $Enums.BenefitFrequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBenefitFrequencyFilter<$PrismaModel>
    _max?: NestedEnumBenefitFrequencyFilter<$PrismaModel>
  }

  export type CreditCardCreateWithoutUserInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: BenefitCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefits?: BenefitUncheckedCreateNestedManyWithoutCreditCardInput
  }

  export type CreditCardCreateOrConnectWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput>
  }

  export type CreditCardCreateManyUserInputEnvelope = {
    data: CreditCardCreateManyUserInput | CreditCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BenefitStatusCreateWithoutUserInput = {
    id?: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    benefit: BenefitCreateNestedOneWithoutBenefitStatusesInput
  }

  export type BenefitStatusUncheckedCreateWithoutUserInput = {
    id?: string
    benefitId: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitStatusCreateOrConnectWithoutUserInput = {
    where: BenefitStatusWhereUniqueInput
    create: XOR<BenefitStatusCreateWithoutUserInput, BenefitStatusUncheckedCreateWithoutUserInput>
  }

  export type BenefitStatusCreateManyUserInputEnvelope = {
    data: BenefitStatusCreateManyUserInput | BenefitStatusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CreditCardUpsertWithWhereUniqueWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    update: XOR<CreditCardUpdateWithoutUserInput, CreditCardUncheckedUpdateWithoutUserInput>
    create: XOR<CreditCardCreateWithoutUserInput, CreditCardUncheckedCreateWithoutUserInput>
  }

  export type CreditCardUpdateWithWhereUniqueWithoutUserInput = {
    where: CreditCardWhereUniqueInput
    data: XOR<CreditCardUpdateWithoutUserInput, CreditCardUncheckedUpdateWithoutUserInput>
  }

  export type CreditCardUpdateManyWithWhereWithoutUserInput = {
    where: CreditCardScalarWhereInput
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyWithoutUserInput>
  }

  export type CreditCardScalarWhereInput = {
    AND?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
    OR?: CreditCardScalarWhereInput[]
    NOT?: CreditCardScalarWhereInput | CreditCardScalarWhereInput[]
    id?: StringFilter<"CreditCard"> | string
    name?: StringFilter<"CreditCard"> | string
    issuer?: StringFilter<"CreditCard"> | string
    cardNumber?: StringNullableFilter<"CreditCard"> | string | null
    expiryDate?: DateTimeNullableFilter<"CreditCard"> | Date | string | null
    openedDate?: DateTimeNullableFilter<"CreditCard"> | Date | string | null
    userId?: StringFilter<"CreditCard"> | string
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type BenefitStatusUpsertWithWhereUniqueWithoutUserInput = {
    where: BenefitStatusWhereUniqueInput
    update: XOR<BenefitStatusUpdateWithoutUserInput, BenefitStatusUncheckedUpdateWithoutUserInput>
    create: XOR<BenefitStatusCreateWithoutUserInput, BenefitStatusUncheckedCreateWithoutUserInput>
  }

  export type BenefitStatusUpdateWithWhereUniqueWithoutUserInput = {
    where: BenefitStatusWhereUniqueInput
    data: XOR<BenefitStatusUpdateWithoutUserInput, BenefitStatusUncheckedUpdateWithoutUserInput>
  }

  export type BenefitStatusUpdateManyWithWhereWithoutUserInput = {
    where: BenefitStatusScalarWhereInput
    data: XOR<BenefitStatusUpdateManyMutationInput, BenefitStatusUncheckedUpdateManyWithoutUserInput>
  }

  export type BenefitStatusScalarWhereInput = {
    AND?: BenefitStatusScalarWhereInput | BenefitStatusScalarWhereInput[]
    OR?: BenefitStatusScalarWhereInput[]
    NOT?: BenefitStatusScalarWhereInput | BenefitStatusScalarWhereInput[]
    id?: StringFilter<"BenefitStatus"> | string
    benefitId?: StringFilter<"BenefitStatus"> | string
    userId?: StringFilter<"BenefitStatus"> | string
    cycleStartDate?: DateTimeFilter<"BenefitStatus"> | Date | string
    cycleEndDate?: DateTimeFilter<"BenefitStatus"> | Date | string
    isCompleted?: BoolFilter<"BenefitStatus"> | boolean
    completedAt?: DateTimeNullableFilter<"BenefitStatus"> | Date | string | null
    createdAt?: DateTimeFilter<"BenefitStatus"> | Date | string
    updatedAt?: DateTimeFilter<"BenefitStatus"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCreditCardsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreditCardsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    benefitStatuses?: BenefitStatusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreditCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
  }

  export type BenefitCreateWithoutCreditCardInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    benefitStatuses?: BenefitStatusCreateNestedManyWithoutBenefitInput
  }

  export type BenefitUncheckedCreateWithoutCreditCardInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    benefitStatuses?: BenefitStatusUncheckedCreateNestedManyWithoutBenefitInput
  }

  export type BenefitCreateOrConnectWithoutCreditCardInput = {
    where: BenefitWhereUniqueInput
    create: XOR<BenefitCreateWithoutCreditCardInput, BenefitUncheckedCreateWithoutCreditCardInput>
  }

  export type BenefitCreateManyCreditCardInputEnvelope = {
    data: BenefitCreateManyCreditCardInput | BenefitCreateManyCreditCardInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreditCardsInput = {
    update: XOR<UserUpdateWithoutCreditCardsInput, UserUncheckedUpdateWithoutCreditCardsInput>
    create: XOR<UserCreateWithoutCreditCardsInput, UserUncheckedCreateWithoutCreditCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreditCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreditCardsInput, UserUncheckedUpdateWithoutCreditCardsInput>
  }

  export type UserUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreditCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    benefitStatuses?: BenefitStatusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BenefitUpsertWithWhereUniqueWithoutCreditCardInput = {
    where: BenefitWhereUniqueInput
    update: XOR<BenefitUpdateWithoutCreditCardInput, BenefitUncheckedUpdateWithoutCreditCardInput>
    create: XOR<BenefitCreateWithoutCreditCardInput, BenefitUncheckedCreateWithoutCreditCardInput>
  }

  export type BenefitUpdateWithWhereUniqueWithoutCreditCardInput = {
    where: BenefitWhereUniqueInput
    data: XOR<BenefitUpdateWithoutCreditCardInput, BenefitUncheckedUpdateWithoutCreditCardInput>
  }

  export type BenefitUpdateManyWithWhereWithoutCreditCardInput = {
    where: BenefitScalarWhereInput
    data: XOR<BenefitUpdateManyMutationInput, BenefitUncheckedUpdateManyWithoutCreditCardInput>
  }

  export type BenefitScalarWhereInput = {
    AND?: BenefitScalarWhereInput | BenefitScalarWhereInput[]
    OR?: BenefitScalarWhereInput[]
    NOT?: BenefitScalarWhereInput | BenefitScalarWhereInput[]
    id?: StringFilter<"Benefit"> | string
    category?: StringFilter<"Benefit"> | string
    description?: StringFilter<"Benefit"> | string
    percentage?: FloatFilter<"Benefit"> | number
    maxAmount?: FloatNullableFilter<"Benefit"> | number | null
    startDate?: DateTimeFilter<"Benefit"> | Date | string
    endDate?: DateTimeNullableFilter<"Benefit"> | Date | string | null
    frequency?: EnumBenefitFrequencyFilter<"Benefit"> | $Enums.BenefitFrequency
    creditCardId?: StringFilter<"Benefit"> | string
    createdAt?: DateTimeFilter<"Benefit"> | Date | string
    updatedAt?: DateTimeFilter<"Benefit"> | Date | string
  }

  export type CreditCardCreateWithoutBenefitsInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCreditCardsInput
  }

  export type CreditCardUncheckedCreateWithoutBenefitsInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardCreateOrConnectWithoutBenefitsInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutBenefitsInput, CreditCardUncheckedCreateWithoutBenefitsInput>
  }

  export type BenefitStatusCreateWithoutBenefitInput = {
    id?: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBenefitStatusesInput
  }

  export type BenefitStatusUncheckedCreateWithoutBenefitInput = {
    id?: string
    userId: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitStatusCreateOrConnectWithoutBenefitInput = {
    where: BenefitStatusWhereUniqueInput
    create: XOR<BenefitStatusCreateWithoutBenefitInput, BenefitStatusUncheckedCreateWithoutBenefitInput>
  }

  export type BenefitStatusCreateManyBenefitInputEnvelope = {
    data: BenefitStatusCreateManyBenefitInput | BenefitStatusCreateManyBenefitInput[]
    skipDuplicates?: boolean
  }

  export type CreditCardUpsertWithoutBenefitsInput = {
    update: XOR<CreditCardUpdateWithoutBenefitsInput, CreditCardUncheckedUpdateWithoutBenefitsInput>
    create: XOR<CreditCardCreateWithoutBenefitsInput, CreditCardUncheckedCreateWithoutBenefitsInput>
    where?: CreditCardWhereInput
  }

  export type CreditCardUpdateToOneWithWhereWithoutBenefitsInput = {
    where?: CreditCardWhereInput
    data: XOR<CreditCardUpdateWithoutBenefitsInput, CreditCardUncheckedUpdateWithoutBenefitsInput>
  }

  export type CreditCardUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCreditCardsNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusUpsertWithWhereUniqueWithoutBenefitInput = {
    where: BenefitStatusWhereUniqueInput
    update: XOR<BenefitStatusUpdateWithoutBenefitInput, BenefitStatusUncheckedUpdateWithoutBenefitInput>
    create: XOR<BenefitStatusCreateWithoutBenefitInput, BenefitStatusUncheckedCreateWithoutBenefitInput>
  }

  export type BenefitStatusUpdateWithWhereUniqueWithoutBenefitInput = {
    where: BenefitStatusWhereUniqueInput
    data: XOR<BenefitStatusUpdateWithoutBenefitInput, BenefitStatusUncheckedUpdateWithoutBenefitInput>
  }

  export type BenefitStatusUpdateManyWithWhereWithoutBenefitInput = {
    where: BenefitStatusScalarWhereInput
    data: XOR<BenefitStatusUpdateManyMutationInput, BenefitStatusUncheckedUpdateManyWithoutBenefitInput>
  }

  export type PredefinedBenefitCreateWithoutPredefinedCardInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedBenefitCreateOrConnectWithoutPredefinedCardInput = {
    where: PredefinedBenefitWhereUniqueInput
    create: XOR<PredefinedBenefitCreateWithoutPredefinedCardInput, PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput>
  }

  export type PredefinedBenefitCreateManyPredefinedCardInputEnvelope = {
    data: PredefinedBenefitCreateManyPredefinedCardInput | PredefinedBenefitCreateManyPredefinedCardInput[]
    skipDuplicates?: boolean
  }

  export type PredefinedBenefitUpsertWithWhereUniqueWithoutPredefinedCardInput = {
    where: PredefinedBenefitWhereUniqueInput
    update: XOR<PredefinedBenefitUpdateWithoutPredefinedCardInput, PredefinedBenefitUncheckedUpdateWithoutPredefinedCardInput>
    create: XOR<PredefinedBenefitCreateWithoutPredefinedCardInput, PredefinedBenefitUncheckedCreateWithoutPredefinedCardInput>
  }

  export type PredefinedBenefitUpdateWithWhereUniqueWithoutPredefinedCardInput = {
    where: PredefinedBenefitWhereUniqueInput
    data: XOR<PredefinedBenefitUpdateWithoutPredefinedCardInput, PredefinedBenefitUncheckedUpdateWithoutPredefinedCardInput>
  }

  export type PredefinedBenefitUpdateManyWithWhereWithoutPredefinedCardInput = {
    where: PredefinedBenefitScalarWhereInput
    data: XOR<PredefinedBenefitUpdateManyMutationInput, PredefinedBenefitUncheckedUpdateManyWithoutPredefinedCardInput>
  }

  export type PredefinedBenefitScalarWhereInput = {
    AND?: PredefinedBenefitScalarWhereInput | PredefinedBenefitScalarWhereInput[]
    OR?: PredefinedBenefitScalarWhereInput[]
    NOT?: PredefinedBenefitScalarWhereInput | PredefinedBenefitScalarWhereInput[]
    id?: StringFilter<"PredefinedBenefit"> | string
    category?: StringFilter<"PredefinedBenefit"> | string
    description?: StringFilter<"PredefinedBenefit"> | string
    percentage?: FloatFilter<"PredefinedBenefit"> | number
    maxAmount?: FloatNullableFilter<"PredefinedBenefit"> | number | null
    frequency?: EnumBenefitFrequencyFilter<"PredefinedBenefit"> | $Enums.BenefitFrequency
    predefinedCardId?: StringFilter<"PredefinedBenefit"> | string
    createdAt?: DateTimeFilter<"PredefinedBenefit"> | Date | string
    updatedAt?: DateTimeFilter<"PredefinedBenefit"> | Date | string
  }

  export type PredefinedCardCreateWithoutBenefitsInput = {
    id?: string
    name: string
    issuer: string
    annualFee: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedCardUncheckedCreateWithoutBenefitsInput = {
    id?: string
    name: string
    issuer: string
    annualFee: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedCardCreateOrConnectWithoutBenefitsInput = {
    where: PredefinedCardWhereUniqueInput
    create: XOR<PredefinedCardCreateWithoutBenefitsInput, PredefinedCardUncheckedCreateWithoutBenefitsInput>
  }

  export type PredefinedCardUpsertWithoutBenefitsInput = {
    update: XOR<PredefinedCardUpdateWithoutBenefitsInput, PredefinedCardUncheckedUpdateWithoutBenefitsInput>
    create: XOR<PredefinedCardCreateWithoutBenefitsInput, PredefinedCardUncheckedCreateWithoutBenefitsInput>
    where?: PredefinedCardWhereInput
  }

  export type PredefinedCardUpdateToOneWithWhereWithoutBenefitsInput = {
    where?: PredefinedCardWhereInput
    data: XOR<PredefinedCardUpdateWithoutBenefitsInput, PredefinedCardUncheckedUpdateWithoutBenefitsInput>
  }

  export type PredefinedCardUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    annualFee?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedCardUncheckedUpdateWithoutBenefitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    annualFee?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateWithoutBenefitStatusesInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCard: CreditCardCreateNestedOneWithoutBenefitsInput
  }

  export type BenefitUncheckedCreateWithoutBenefitStatusesInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    creditCardId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitCreateOrConnectWithoutBenefitStatusesInput = {
    where: BenefitWhereUniqueInput
    create: XOR<BenefitCreateWithoutBenefitStatusesInput, BenefitUncheckedCreateWithoutBenefitStatusesInput>
  }

  export type UserCreateWithoutBenefitStatusesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBenefitStatusesInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    notifyNewBenefit?: boolean
    notifyBenefitExpiration?: boolean
    notifyExpirationDays?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creditCards?: CreditCardUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBenefitStatusesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBenefitStatusesInput, UserUncheckedCreateWithoutBenefitStatusesInput>
  }

  export type BenefitUpsertWithoutBenefitStatusesInput = {
    update: XOR<BenefitUpdateWithoutBenefitStatusesInput, BenefitUncheckedUpdateWithoutBenefitStatusesInput>
    create: XOR<BenefitCreateWithoutBenefitStatusesInput, BenefitUncheckedCreateWithoutBenefitStatusesInput>
    where?: BenefitWhereInput
  }

  export type BenefitUpdateToOneWithWhereWithoutBenefitStatusesInput = {
    where?: BenefitWhereInput
    data: XOR<BenefitUpdateWithoutBenefitStatusesInput, BenefitUncheckedUpdateWithoutBenefitStatusesInput>
  }

  export type BenefitUpdateWithoutBenefitStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCard?: CreditCardUpdateOneRequiredWithoutBenefitsNestedInput
  }

  export type BenefitUncheckedUpdateWithoutBenefitStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    creditCardId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBenefitStatusesInput = {
    update: XOR<UserUpdateWithoutBenefitStatusesInput, UserUncheckedUpdateWithoutBenefitStatusesInput>
    create: XOR<UserCreateWithoutBenefitStatusesInput, UserUncheckedCreateWithoutBenefitStatusesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBenefitStatusesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBenefitStatusesInput, UserUncheckedUpdateWithoutBenefitStatusesInput>
  }

  export type UserUpdateWithoutBenefitStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBenefitStatusesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    notifyNewBenefit?: BoolFieldUpdateOperationsInput | boolean
    notifyBenefitExpiration?: BoolFieldUpdateOperationsInput | boolean
    notifyExpirationDays?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creditCards?: CreditCardUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CreditCardCreateManyUserInput = {
    id?: string
    name: string
    issuer: string
    cardNumber?: string | null
    expiryDate?: Date | string | null
    openedDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type BenefitStatusCreateManyUserInput = {
    id?: string
    benefitId: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: BenefitUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefits?: BenefitUncheckedUpdateManyWithoutCreditCardNestedInput
  }

  export type CreditCardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    cardNumber?: NullableStringFieldUpdateOperationsInput | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    openedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefit?: BenefitUpdateOneRequiredWithoutBenefitStatusesNestedInput
  }

  export type BenefitStatusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    benefitId?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    benefitId?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitCreateManyCreditCardInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    startDate: Date | string
    endDate?: Date | string | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitUpdateWithoutCreditCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefitStatuses?: BenefitStatusUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateWithoutCreditCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    benefitStatuses?: BenefitStatusUncheckedUpdateManyWithoutBenefitNestedInput
  }

  export type BenefitUncheckedUpdateManyWithoutCreditCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusCreateManyBenefitInput = {
    id?: string
    userId: string
    cycleStartDate: Date | string
    cycleEndDate: Date | string
    isCompleted?: boolean
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BenefitStatusUpdateWithoutBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBenefitStatusesNestedInput
  }

  export type BenefitStatusUncheckedUpdateWithoutBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BenefitStatusUncheckedUpdateManyWithoutBenefitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cycleStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    cycleEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedBenefitCreateManyPredefinedCardInput = {
    id?: string
    category: string
    description: string
    percentage: number
    maxAmount?: number | null
    frequency?: $Enums.BenefitFrequency
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredefinedBenefitUpdateWithoutPredefinedCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedBenefitUncheckedUpdateWithoutPredefinedCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredefinedBenefitUncheckedUpdateManyWithoutPredefinedCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: FloatFieldUpdateOperationsInput | number
    maxAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    frequency?: EnumBenefitFrequencyFieldUpdateOperationsInput | $Enums.BenefitFrequency
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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